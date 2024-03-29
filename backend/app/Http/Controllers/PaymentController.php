<?php

namespace App\Http\Controllers;


use App\Constants\Payments\PaymentProvider;
use App\Constants\Payments\PaymentStatus;
use App\Constants\TimeConstant;
use App\Http\Resources\Payment as PaymentResource;
use App\Http\Resources\PaymentPaginatorCollection;
use App\Models\Car;
use App\Models\Payment;
use App\Services\AutovisualClient;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Stripe\Stripe;
use Stripe\StripeClient;
use Throwable;

class PaymentController extends Controller
{
    private $autovisualClient;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->autovisualClient = new AutovisualClient(
            config()->get('services.autovisual')
        );
    }


    public function index(Request $request)
    {
        $paymentsReq = Payment::with('car', 'user');

        if ($request->has('owner')) {
            $owner = Str::of($request->query('owner'))->trim();
            if (!$owner->isEmpty()) {
                $paymentsReq->where('user_id', $owner);
            }
        }

        $paymentsReq->orderBy('created_at', 'desc');

        $paymentsLengthAwarePaginator = $paymentsReq->paginate($request->perPage, ['*'], $request->pageName, $request->page);

        return response()->json(new PaymentPaginatorCollection($paymentsLengthAwarePaginator));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $currentUser = Auth::user();
            $reqPayment = (object)$request->json()->all();

            // Validate
            $validator = $this->validateEntity($reqPayment);
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()->messages()], 401);
            }

            // Check car owner
            $car = Car::find($reqPayment->car_id);
            if ($car === NULL || $currentUser->id !== $car->user_id) {
                return response()->json(['error' => 'Invalid parameters'], 422);
            }

            //
            // Create entity
            $newPayment = new Payment;
            $this->updatePaymentFields($newPayment, $reqPayment);
            $newPayment->user_id = $currentUser->id;
            $newPayment->car_id = $reqPayment->car_id;
            $newPayment->status = PaymentStatus::PENDING;
            $newPayment->save();

            $charge = $this->pay($currentUser, $car, $newPayment, $request);

            if ($charge->status === PaymentStatus::SUCCEEDED) {
                $car->expire_at = Carbon::now()->addDays(TimeConstant::EXPIRATION_DURATION_IN_DAYS);

                if (!$car->premium) {
                    $this->updateDataFromAutovisual($car);
                    $car->premium = true;
                }
                $car->save();
            }

            return response()->json($charge);
        } catch (Throwable $ex){
            return response()->json(['error' => $ex->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Payment
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return $this->renderJson($id);
    }

    private function validateEntity($reqPayment)
    {
        return Validator::make((array)$reqPayment, [
            'description' => ['required', 'max:' . Payment::fieldsSizeMax('description')],
            'amount' => ['required', 'integer'],
            'currency' => ['required', 'max:' . Payment::fieldsSizeMax('currency')],
            'provider' => ['required',
                'max:' . Payment::fieldsSizeMax('provider'),
                Rule::in(PaymentProvider::list())],
            'token' => ['required'],
            'car_id' => ['required'],
        ],
            $messages = [
                'required' => 'The :attribute field is required.',
                'max' => 'The :attribute value :input is larger than :max.',
            ]
        );
    }

    private function updatePaymentFields($payment, $reqPayment)
    {
        collect($payment->getFillable())->each(function ($item, $key) use ($payment, $reqPayment) {
            $payment->{$item} = isset($reqPayment->{$item}) ? $reqPayment->{$item} : $payment->{$item};
        });
    }

    private function pay($user, $car, $newPayment, $request)
    {
        if ($newPayment->provider === 'stripe') {
            return $this->payStripe($user, $car, $newPayment, $request);
        } else {
            return response()->json(['error' => 'Invalid payment provider'], 422);
        }
    }

    private function payStripe($user, $car, $newPayment, $request)
    {
        try {
            $charge = (object)array();
            $charge->status = PaymentStatus::FAILED;

            $config = config()->get('services.stripe');

            // Get order from stripe API
            Stripe::setApiKey($config['secret_key']);
            $stripe = new StripeClient(
                $config['secret_key']
            );

            $source = $stripe->sources->create([
                'type' => 'card',
                'currency' => $request->currency,
                'owner' => [
                    'email' => $user->email
                ],
                'token' => $request->token
            ]);


            // Search if customer exist
            $stripeCustomer = null;
            $payment = Payment::where('user_id', $user->id)
                ->whereNotNull('provider_user_id')->first();


            if ($payment) {
                $stripeCustomer = $stripe->customers->retrieve($payment->provider_user_id);
            }
            if ($stripeCustomer == null) {
                $stripeCustomer = $stripe->customers->create([
                    'email' => $user->email,
                    'name' => $user->name,
                    'phone' => $user->phone,
                    'preferred_locales' => ['fr'],
                    'source' => $source['id'],
                    'metadata' => [
                        'user_id' => $user->id
                    ],
                ]);
            }


            $charge = $stripe->charges->create([
                'description' => $request->description,
                'amount' => $request->amount,
                'currency' => $request->currency,
                'receipt_email' => $user->email,
                'customer' => $stripeCustomer['id'],
                'source' => $source['id'],
                'metadata' => [
                    'user_id' => $user->id,
                    'car_id' => $car->id
                ],
            ]);

            $newPayment->status = $charge->status;
            $newPayment->provider_user_id = $stripeCustomer['id'];
            $newPayment->provider_payment_id = $charge['id'];
            $newPayment->save();

        } catch (Throwable $ex) {
            $newPayment->status = PaymentStatus::FAILED;
            $newPayment->save();
            $charge->error = $ex->getMessage();
        }

        return $charge;
    }

    private function renderJson($id): \Illuminate\Http\JsonResponse
    {
        $payment = Payment::find($id);
        if ($payment == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json(new PaymentResource($payment));
    }

    private function updateDataFromAutovisual($car)
    {
        // Add autovisual data
        $data = $car->getAutovisualData();

        // define the option
        $data["value"] = true;
        $data["transaction"] = false;
        $data["market"] = false;

        $autovisualResponse = (object)$this->autovisualClient->getInfo($data);

        // Update car data with response
        if (isset($autovisualResponse->recognition)) {
            $recognition = (object)$autovisualResponse->recognition;
            collect($car->getAutovisualFillable())->each(function ($item, $key) use ($car, $recognition) {
                $car->{$key} = isset($recognition->{$item}) ? Str::lower($recognition->{$item}) : $car->{$key};
            });
        }

        if (isset($autovisualResponse->value)) {
            $value = (object)$autovisualResponse->value;
            $car->estimate_price_min = isset($value->c) ? $value->c : $car->estimate_price_min;
            $car->estimate_price_max = isset($value->b) ? $value->b : $car->estimate_price_max;
        }

        return $autovisualResponse;
    }

}

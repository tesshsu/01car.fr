<?php

namespace App\Http\Controllers;

use App\Constants\AvailablePeriod;
use App\Constants\CarState;
use App\Constants\EquipmentCategory;
use App\Constants\Equipments\AntiTheftEquipment;
use App\Constants\Equipments\ComfortEquipment;
use App\Constants\Equipments\InsideEquipment;
use App\Constants\Equipments\OtherEquipment;
use App\Constants\Equipments\OutsideEquipment;
use App\Constants\Equipments\SecurityEquipment;
use App\Constants\OwnerType;
use App\Constants\SaleReason;
use App\Constants\TimeConstant;
use App\Http\Resources\Car as CarResource;
use App\Http\Resources\CarPaginatorCollection;
use App\Http\Resources\Upload as UploadResource;
use App\Models\Car;
use App\Models\CarAttribute;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CarController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }


    /**
     * List all users
     *
     * @return \Illuminate\Http\JsonResponse json
     */
    public function index(Request $request)
    {
        $carsReq = Car::with('attributes', 'premiumOptions', 'user', 'uploads');

        if ($request->has('premium')) {
            $premium = $request->query('premium');
            if (!$premium->isEmpty()) {
                $carsReq->where('premium', $premium);
            }
        }

        if ($request->has('owner')) {
            $owner = Str::of($request->query('owner'))->trim();
            if (!$owner->isEmpty()) {
                $carsReq->where('user_id', $owner);
            }
        }

        // filter on price
        if ($request->has('price_min')) {
            $price_min = Str::of($request->query('price_min'))->trim();;
            if (!$price_min->isEmpty()) {
                $carsReq->where('price', '>=', $price_min);
            }
        }
        if ($request->has('price_max')) {
            $price_max = Str::of($request->query('price_max'))->trim();;
            if (!$price_max->isEmpty()) {
                $carsReq->where('price', '<=', $price_max);
            }
        }

        // filter on km
        if ($request->has('km_min')) {
            $km_min = Str::of($request->query('km_min'))->trim();;
            if (!$km_min->isEmpty()) {
                $carsReq->where('km', '>=', $km_min);
            }
        }
        if ($request->has('km_max')) {
            $km_max = Str::of($request->query('km_max'))->trim();;
            if (!$km_max->isEmpty()) {
                $carsReq->where('km', '<=', $km_max);
            }
        }

        // filter on dt_entry_service
        if ($request->has('dt_entry_service_min')) {
            $dt_entry_service_min = Str::of($request->query('dt_entry_service_min'))->trim();
            if (!$dt_entry_service_min->isEmpty()) {
                $carsReq->where('dt_entry_service', '>=', $dt_entry_service_min);
            }
        }
        if ($request->has('dt_entry_service_max')) {
            $dt_entry_service_max = Str::of($request->query('dt_entry_service_max'))->trim();
            if (!$dt_entry_service_max->isEmpty()) {
                $carsReq->where('dt_entry_service', '<=', $dt_entry_service_max);
            }
        }

        // filter on postal
        if ($request->has('postal_code')) {
            $postal_code = Str::of($request->query('postal_code'))->trim();
            if (!$postal_code->isEmpty()) {
                $carsReq->where('postal_code', 'like', $postal_code . '%');
            }
        }

        if ($request->has('brand')) {
            $brands = Str::of($request->query('brand'))->trim()->split('/[\s,]+/');;
            if (!$brands->isEmpty()) {
                $brands->each(function ($brand, $key) use ($carsReq) {
                    $carsReq->where(function ($query) use ($brand) {
                        $query->where('brand', 'like', '%' . $brand . '%')
                            ->orWhere('model', 'like', '%' . $brand . '%');
                    });
                });
            }
        }
        if ($request->has('model')) {
            $models = Str::of($request->query('model'))->trim()->split('/[\s,]+/');
            if (!$models->isEmpty()) {
                $models->each(function ($model, $key) use ($carsReq) {
                    $carsReq->where(function ($query) use ($model) {
                        $query->where('brand', 'like', '%' . $model . '%')
                            ->orWhere('model', 'like', '%' . $model . '%');
                    });
                });
            }
        }
        if ($request->has('fuel')) {
            $fuel = Str::of($request->query('fuel'))->trim();
            if (!$fuel->isEmpty()) {
                $carsReq->where('fuel', '=', $fuel);
            }
        }
        if ($request->has('transmission')) {
            $transmission = Str::of($request->query('transmission'))->trim();
            if (!$transmission->isEmpty()) {
                $carsReq->where('transmission', '=', $transmission);
            }
        }
        if ($request->has('owner_type')) {
            $owner_type = Str::of($request->query('owner_type'))->trim();
            if (!$owner_type->isEmpty()) {
                $carsReq->where('owner_type', '=', $owner_type);
            }
        }

        // filter on dt_entry_service
        if ($request->has('expire_at_min')) {
            $expire_at_min = Str::of($request->query('expire_at_min'))->trim();
            if (!$expire_at_min->isEmpty()) {
                $carsReq->where('expire_at', '>=', $expire_at_min);
            }
        }
        if ($request->has('expire_at_max')) {
            $expire_at_max = Str::of($request->query('expire_at_max'))->trim();
            if (!$expire_at_max->isEmpty()) {
                $carsReq->where('expire_at', '<=', $expire_at_max);
            }
        }
        if(!$request->has('expire_at_min')  && !$request->has('expire_ate_max')){
            $carsReq->where('expire_at', '>=', Carbon::today());
        }

        $carsReq->orderBy('premium', 'desc');
        $carsReq->inRandomOrder();

        $carsLengthAwarePaginator = $carsReq->paginate($request->perPage, ['*'], $request->pageName, $request->page);

        return response()->json(new CarPaginatorCollection($carsLengthAwarePaginator));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $reqCar = (object)$request->json()->all();
        $currentUser = Auth::user();

        // Validate
        $validator = $this->validateEntity($reqCar, null);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->messages()], 401);
        }
        //
        // Create entity
        $newCar = new Car;
        $this->updateCarFields($newCar, $reqCar);
        $newCar->user_id = $currentUser->id;
        // Update expiration date
        $newCar->expire_at = Carbon::now()->addDays(TimeConstant::EXPIRATION_DURATION_IN_DAYS);
        $newCar->save();

        $this->updateAttributes($newCar, $reqCar);
        $this->updatePremiumOptions($newCar, $reqCar);

        // Update cra note
        $newCar->confidence_note = Car::calcConfidenceNote($newCar);
        $newCar->save();

        return $this->renderJson($newCar->id);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Car
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return $this->renderJson($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $car
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Car $car)
    {
        $reqCar = (object)$request->json()->all();

        // check that id are the same
        if (!isset($reqCar->id) || $reqCar->id != $car->id) {
            return response()->json(['error' => 'NotFound'], 404);
        }

        $currentUser = Auth::user();
        if (!$currentUser->canEditCar($car)
            /* || ($currentUser->id == $car->user_id && !$car->premium)*/) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        // Validation
        $validator = $this->validateEntity($reqCar, $car);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        // Update allowed fields
        $this->updateCarFields($car, $reqCar);
        $this->updateAttributes($car, $reqCar);
        $this->updatePremiumOptions($car, $reqCar);

        $car->confidence_note = Car::calcConfidenceNote($car);

        $car->save();

        return $this->renderJson($car->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public
    function destroy($id)
    {
        $car = Car::with('attributes', 'user', 'uploads')->find($id);
        if ($car == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }

        $currentUser = Auth::user();
        if ($currentUser->id != $car->user_id && !$currentUser->isAdminUser()) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }
        $car->attributes->each(function ($item, $key) {
            $item->delete();
        });

        $car->premiumOptions()->delete();

        $car->uploads->each(function ($upload, $key) use ($car) {
            Storage::disk('public')->delete(
                $upload->path . $upload->name
            );
            $car->uploads()->detach($upload);
        });

        $car->delete();
    }

    public
    function removeFiles(Request $request, $car_id, $id)
    {
        $car = Car::with('uploads')->findOrFail($car_id);
        $upload = Upload::findOrFail($id);
        $currentUser = Auth::user();
        if (!$currentUser->canEditCar($car)) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        if ($upload != null) {
            Storage::disk('public')->delete(
                $upload->path . $upload->name
            );
            $car->uploads()->detach($upload);
        }
    }


    public
    function addFiles(Request $request, $id): \Illuminate\Http\JsonResponse
    {
         $validator = Validator::make($request->all(), [
            'uploads.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:16384',
        ],
            $messages = [
                'required' => 'The :attribute field is required.',
                'max' => 'The :attribute value is larger than :max ko.',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        
        $car = Car::with('uploads')->find($id);

        // check that id are the same
        if (!isset($car)) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        $currentUser = Auth::user();
        if (!$currentUser->canEditCar($car)) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        $uploadedFileArr = $request->file('uploads');
        if (!is_array($uploadedFileArr)) {
            $uploadedFileArr = array($uploadedFileArr);
        }

        $uploads = collect([]);

        foreach ($uploadedFileArr as $uploadedFile) {
            $path = null;
            $filename = null;
            if ($uploadedFile != null) {
                $path = $car->getUploadPath();
                $filename = $uploadedFile->getClientOriginalName();

                // check if file with same name exist
                if (in_array($filename, $car->uploads()->getResults()->map(function ($item, $key) {
                    return $item->name;
                })->toArray())) {
                    $filename .= '_' . (string)Str::orderedUuid() . '.' . $uploadedFile->getClientOriginalExtension();
                }

                Storage::disk('public')->putFileAs(
                    $path,
                    $uploadedFile,
                    $filename
                );

                $upload = new Upload();
                // Update attachment information
                $upload->path = $path;
                $upload->name = $filename;
                $upload->mime_content_type = $uploadedFile->getClientMimeType();
                $upload->size = $uploadedFile->getSize();
                $upload->save();

                // save new entries
                $car->uploads()->attach($upload);

                $uploads->push($upload);
            }
        }

        return response()->json(UploadResource::collection($uploads->all()));
    }

    private
    function validateEntity($reqCar, $car)
    {
        return Validator::make((array)$reqCar, [
            'brand' => 'max:' . Car::fieldsSizeMax('brand'),
            'model' => 'max:' . Car::fieldsSizeMax('model'),
            'generation' => 'max:' . Car::fieldsSizeMax('generation'),
            'fuel' => 'max:' . Car::fieldsSizeMax('fuel'),
            'transmission' => 'max:' . Car::fieldsSizeMax('transmission'),
            'carBody' => 'max:' . Car::fieldsSizeMax('carBody'),
            'finishing' => 'max:' . Car::fieldsSizeMax('finishing'),
            'displacement' => 'max:' . Car::fieldsSizeMax('displacement'),
            'version' => 'max:' . Car::fieldsSizeMax('version'),
            'km' => 'integer',
            'currency' => 'max:' . Car::fieldsSizeMax('currency'),
            'owner_type' => ['max:' . Car::fieldsSizeMax('owner_type'), Rule::in(OwnerType::list())],
            'available' => ['max:' . Car::fieldsSizeMax('available'), Rule::in(AvailablePeriod::list())],
            'smoking' => 'boolean',
            'duplicate_keys' => 'boolean',
            'sale_reason' => ['max:' . Car::fieldsSizeMax('sale_reason'), Rule::in(SaleReason::list())],
            'hand_number' => ['integer', 'min:1', 'max:3'],
            'state' => ['max:' . Car::fieldsSizeMax('state'), Rule::in(CarState::list())],
            'country' => ['max:' . Car::fieldsSizeMax('country')],
            'postal_code' => ['max:' . Car::fieldsSizeMax('postal_code')],
            'equipments.outside' => ['array', Rule::in(OutsideEquipment::list())],
            'equipments.inside' => ['array', Rule::in(InsideEquipment::list())],
            'equipments.anti_theft' => ['array', Rule::in(AntiTheftEquipment::list())],
            'equipments.comfort' => ['array', Rule::in(ComfortEquipment::list())],
            'equipments.other' => ['array', Rule::in(OtherEquipment::list())],
            'equipments.security' => ['array', Rule::in(SecurityEquipment::list())],
            'premiumOptions.under_warranty' => 'boolean',
            'premiumOptions.accident' => 'boolean',
            'premiumOptions.defects' => 'boolean',
            'premiumOptions.km_certificate' => 'boolean',
            'premiumOptions.technical_check_ok' => 'boolean',
            'premiumOptions.periodic_maintenance' => 'boolean',
            'premiumOptions.next_maintenance_under_5000km' => 'boolean',
            'premiumOptions.purchase_invoice' => 'boolean',
            'premiumOptions.gray_card' => 'boolean',
            'premiumOptions.maintenance_log' => 'boolean'
        ],
            $messages = [
                'required' => 'The :attribute field is required.',
                'max' => 'The :attribute value :input is larger than :max.',
                'min' => 'The :attribute value :input is smaller than :min.',
                'in' => 'The :attribute must be one of the following types: :values',
            ]
        );
    }

    private
    function updateCarFields($car, $reqCar)
    {
        collect($car->getFillable())->each(function ($item, $key) use ($car, $reqCar) {
            $car->{$item} = isset($reqCar->{$item}) ? $reqCar->{$item} : $car->{$item};
        });

        // Handle date format
        $car->dt_entry_service = isset($reqCar->dt_entry_service) ? Carbon::parse($reqCar->dt_entry_service)->toDateTime() : $car->dt_entry_service;
        $car->dt_valuation = isset($reqCar->dt_valuation) ? Carbon::parse($reqCar->dt_valuation)->toDateTime() : $car->dt_valuation;
    }

    private
    function updatePremiumOptions(Car $car, $reqCar)
    {
        if ($car->premium && isset($reqCar->premiumOptions)) {
            $premiumOptions = $car->premiumOptions()->firstOrNew(
                ['car_id' => $car->id],
            );

            if ($premiumOptions && $reqCar->premiumOptions) {
                collect($premiumOptions->getFillable())->each(function ($item, $key) use ($premiumOptions, $reqCar) {
                    $premiumOptions->{$item} = isset(((object)$reqCar->premiumOptions)->{$item}) ?
                        ((object)$reqCar->premiumOptions)->{$item} :
                        $premiumOptions->{$item};
                });

                $premiumOptions->save();
            }
        }
    }

    private
    function updateAttributes($car, $reqCar)
    {
        if (isset($reqCar->equipments)) {
            collect(EquipmentCategory::list())->each(function ($item, $key) use ($car, $reqCar) {
                if (isset($reqCar->equipments[$item])) {
                    $this->updateAttributesByCategory($car, (array)$reqCar->equipments[$item], $item);
                }
            });
        }

        if (isset($reqCar->options) && isset($reqCar->options["premium"])) {
            $this->updateAttributesByCategory($car, (array)$reqCar->options["premium"], EquipmentCategory::PREMIUM);
        }
    }

    private
    function updateAttributesByCategory(Car $car, $reqAttributes, $category)
    {
        $attributesInDB = $car->attributes()->getResults()->filter(function ($value, $key) use ($category) {
            return $value->category == $category;
        });

        $deleteAttributes = $attributesInDB->filter(function ($value, $key) use ($reqAttributes) {
            return !in_array($value->name, $reqAttributes);
        })->flatten();

        $categoryAttNames = $attributesInDB->map(function ($item, $key) {
            return $item->name;
        })->all();

        $newAttributes = collect($reqAttributes)->filter(function ($value, $key) use ($categoryAttNames) {
            return !in_array($value, $categoryAttNames);
        });

        // remove elements no longer in the list
        $deleteAttributes->each(function ($item, $key) {
            $item->delete();
        });

        // create new attributes
        $newAttributes->each(function ($item, $key) use ($car, $category) {
            $att = new CarAttribute();
            $att->category = $category;
            $att->name = $item;
            $att->car_id = $car->id;
            $att->save();
        });

    }

    private function renderJson($id): \Illuminate\Http\JsonResponse
    {
        $car = Car::with('attributes', 'premiumOptions', 'user', 'uploads')->find($id);
        if ($car == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json(new CarResource($car));
    }

}

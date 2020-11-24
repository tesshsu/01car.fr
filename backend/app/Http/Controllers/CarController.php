<?php

namespace App\Http\Controllers;

use App\Http\Resources\Car as CarResource;
use App\Http\Resources\CarPaginatorCollection;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CarController extends Controller
{
    public $successStatus = 200;

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
        $carsReq = Car::with('user');

        if ($request->has('prenium')) {
            $prenium = $request->query('prenium');
            $carsReq->where('prenium', $prenium);
        }

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
        if ($reqCar->id != $car->id) {
            return response()->json(['error' => 'NotFound'], 404);
        }

        $currentUser = Auth::user();
        if ($currentUser->id != $car->user_id
            || ($currentUser->id == $car->user_id && !$car->prenium)
            || !$currentUser->isAdminUser()) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }

        // Validation
        $validator = $this->validateEntity($reqCar, $car);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        // Update allowed fields
        $this->updateCarFields($car, $reqCar);

        $car->save();
        //
        return $this->renderJson($car->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Car $car)
    {
        $currentUser = Auth::user();
        if ($currentUser->id != $car->user_id || !$currentUser->isAdminUser()) {
            return response()->json(['error' => 'Unauthorised'], 403);
        }
        $car->delete();
    }

    private function validateEntity($reqCar, $car)
    {
        return Validator::make((array)$reqCar, [
            'brand' => 'max:' . Car::fieldsSizeMax('brand'),
            'model' => 'max:' . Car::fieldsSizeMax('model'),
            'generation' => 'max:' . Car::fieldsSizeMax('generation'),
            'fuel' => 'max:' . Car::fieldsSizeMax('fuel'),
            'transmission' => 'max:' . Car::fieldsSizeMax('transmission'),
            'carBody' => 'max:' . Car::fieldsSizeMax('carBody'),
            'finition' => 'max:' . Car::fieldsSizeMax('finition'),
            'displacement' => 'max:' . Car::fieldsSizeMax('displacement'),
            'version' => 'max:' . Car::fieldsSizeMax('version'),
            'currency' => 'max:' . Car::fieldsSizeMax('currency'),
        ]);
    }


    private function updateCarFields($car, $reqCar)
    {
        $car->brand = isset($reqCar->brand) ? $reqCar->brand : $car->brand;
        $car->model = isset($reqCar->model) ? $reqCar->model : $car->model;
        $car->generation = isset($reqCar->generation) ? $reqCar->generation : $car->generation;
        $car->phase = isset($reqCar->phase) ? $reqCar->phase : $car->phase;
        $car->id_carBody = isset($reqCar->id_carBody) ? $reqCar->id_carBody : $car->id_carBody;
        $car->fuel = isset($reqCar->fuel) ? $reqCar->fuel : $car->fuel;
        $car->transmission = isset($reqCar->transmission) ? $reqCar->transmission : $car->transmission;
        $car->carBody = isset($reqCar->carBody) ? $reqCar->carBody : $car->carBody;
        $car->doors = isset($reqCar->doors) ? $reqCar->doors : $car->doors;
        $car->finition = isset($reqCar->finition) ? $reqCar->finition : $car->finition;
        $car->displacement = isset($reqCar->displacement) ? $reqCar->displacement : $car->displacement;
        $car->power = isset($reqCar->power) ? $reqCar->power : $car->power;
        $car->version = isset($reqCar->version) ? $reqCar->version : $car->version;
        $car->km = isset($reqCar->km) ? $reqCar->km : $car->km;

        $car->dt_entry_service = isset($reqCar->dt_entry_service) ? $reqCar->dt_entry_service : $car->dt_entry_service;

        $car->dt_valuation = isset($reqCar->dt_valuation) ? $reqCar->dt_valuation : $car->dt_valuation;
        $car->scoreRecognition = isset($reqCar->scoreRecognition) ? $reqCar->scoreRecognition : $car->scoreRecognition;
        $car->scoreValuation = isset($reqCar->scoreValuation) ? $reqCar->scoreValuation : $car->scoreValuation;

        $car->price = isset($reqCar->price) ? $reqCar->price : $car->price;
        $car->currency = isset($reqCar->currency) ? $reqCar->currency : $car->currency;
        $car->prenium = isset($reqCar->prenium) ? $reqCar->prenium : $car->prenium;

    }

    private function renderJson($id)
    {
        $car = Car::with('user')->find($id);
        if ($car == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json(new CarResource($car));
    }
}

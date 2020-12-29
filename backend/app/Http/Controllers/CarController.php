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
use App\Constants\Equipments\PremiumEquipment;
use App\Constants\Equipments\SecurityEquipment;
use App\Constants\OwnerType;
use App\Constants\SaleReason;
use App\Constants\TimeConstant;
use App\Http\Resources\Car as CarResource;
use App\Http\Resources\CarPaginatorCollection;
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
use Ramsey\Uuid\Type\Time;

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
        $carsReq = Car::with('attributes', 'user', 'uploads');

        if ($request->has('premium')) {
            $premium = $request->query('premium');
            $carsReq->where('premium', $premium);
        }

        $carsReq->orderBy('premium', 'desc');
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
            || ($currentUser->id == $car->user_id && !$car->premium)) {
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

    public function removeFiles(Request $request, $car_id, $id)
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


    public function addFiles(Request $request, $id): \Illuminate\Http\JsonResponse
    {
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
        if(!is_array($uploadedFileArr)){
            $uploadedFileArr = array($uploadedFileArr);
        }

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
            }
        }

        return $this->renderJson($car->id);
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
            'equipments.outside' => ['array', Rule::in(OutsideEquipment::list())],
            'equipments.inside' => ['array', Rule::in(InsideEquipment::list())],
            'equipments.anti_theft' => ['array', Rule::in(AntiTheftEquipment::list())],
            'equipments.comfort' => ['array', Rule::in(ComfortEquipment::list())],
            'equipments.other' => ['array', Rule::in(OtherEquipment::list())],
            'equipments.security' => ['array', Rule::in(SecurityEquipment::list())],
            'options.premium' => ['array', Rule::in(PremiumEquipment::list())],
        ],
            $messages = [
                'required' => 'The :attribute field is required.',
                'max' => 'The :attribute value :input is larger than :max.',
                'min' => 'The :attribute value :input is smaller than :min.',
                'in' => 'The :attribute must be one of the following types: :values',
            ]
        );
    }

    private function updateCarFields($car, $reqCar)
    {
        collect($car->getFillable())->each(function ($item, $key) use ($car, $reqCar) {
             $car->{ $item }  = isset($reqCar->{ $item } ) ? $reqCar->{ $item } : $car->{ $item } ;
        });

        if (isset($reqCar->equipments)) {
            collect(EquipmentCategory::list())->each(function ($item, $key) use ($car, $reqCar) {
                if (isset($reqCar->equipments[$item])) {
                    $this->updateAttributes($car, (array)$reqCar->equipments[$item], $item);
                }
            });

        }

        if (isset($reqCar->options) && isset($reqCar->options["premium"])) {
            $this->updateAttributes($car, (array)$reqCar->options["premium"], EquipmentCategory::PREMIUM);
        }

        $car->confidence_note = Car::calcConfidenceNote($car);
    }

    private function updateAttributes(Car $car, $reqAttributes, $category)
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
        $car = Car::with('attributes', 'user', 'uploads')->find($id);
        if ($car == NULL) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json(new CarResource($car));
    }
}

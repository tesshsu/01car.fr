<?php

namespace App\Http\Resources;

use App\Constants\EquipmentCategory;
use App\Http\Resources\CarPremiumOption as CarPremiumOptionResource;
use App\Http\Resources\Upload as UploadResource;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;
use Illuminate\Support\Carbon;

class Car extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $groupedEquipments = $this->whenLoaded('attributes');
        $equipments = new MissingValue();
        if (!$groupedEquipments instanceof MissingValue) {
            $groupedEquipments = $groupedEquipments->groupBy('category');
            $equipments = collect(EquipmentCategory::list())
                ->flatMap(function ($item, $key) use ($groupedEquipments) {
                    return [$item => $groupedEquipments->has([$item]) ?
                        $groupedEquipments[$item]->map(function ($equip) {
                            return $equip->name;
                        })->unique() : []
                    ];
                });
        }

        return [
            'id' => $this->id,
            'created_at' => Carbon::parse($this->created_at)->toIso8601String(),
            'updated_at' => Carbon::parse($this->updated_at)->toIso8601String(),
            'expire_at' => Carbon::parse($this->expire_at)->toIso8601String(),
            'premium' => $this->premium > 0 ? true : false,
            'brand' => $this->brand,
            'model' => $this->model,
            'generation' => $this->generation,
            'phase' => $this->phase,
            'id_carBody' => $this->id_carBody,
            'fuel' => $this->fuel,
            'transmission' => $this->transmission,
            'car_body' => $this->carBody,
            'doors' => $this->doors,
            'finishing' => $this->finishing,
            'displacement' => $this->displacement,
            'power' => $this->power,
            'version' => $this->version,
            'km' => $this->km,
            'dt_entry_service' => Carbon::parse($this->dt_entry_service)->toIso8601String(),
            'dt_valuation' => Carbon::parse($this->dt_valuation)->toIso8601String(),

            'score_recognition' => $this->score_recognition,
            'score_valuation' => $this->score_valuation,
            'confidence_note' => $this->confidence_note,

            'estimate_price' => $this->estimate_price,
            'price' => $this->price,
            'currency' => $this->currency,

            'license_plate' => $this->license_plate,

            'owner_type' => $this->owner_type,
            'available' => $this->available,
            'smoking' => $this->smoking > 0 ? true : false,
            'duplicate_keys' => $this->duplicate_keys > 0 ? true : false,
            'sale_reason' => $this->sale_reason,
            'hand_number' => $this->hand_number,
            'state' => $this->state,
            'country' => $this->country,
            'postal_code'=> $this->postal_code,
            'owner' => new UserResource($this->whenLoaded('user')),
            'equipments' => $equipments,
            'premiumOptions' => new CarPremiumOptionResource($this->whenLoaded('premiumOptions')),
            'uploads' => UploadResource::collection($this->whenLoaded('uploads')),
        ];
    }
}

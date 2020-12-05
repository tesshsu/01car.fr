<?php

namespace App\Http\Resources;

use App\Constants\EquipmentCategory;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

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
        $groupedEquipments = $this->whenLoaded('equipments')->groupBy('category');
        $equipments =  collect(EquipmentCategory::list())->flatMap(function ($item, $key) use ($groupedEquipments) {
            return [  $item => $groupedEquipments[$item]->map(function ($equip) {
                return $equip->name;
            }) ];
        });

        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'prenium' => $this->prenium > 0 ? true : false,
            'brand' => $this->brand,
            'model' => $this->model,
            'generation' => $this->generation,
            'phase' => $this->phase,
            'id_carBody' => $this->id_carBody,
            'fuel' => $this->fuel,
            'transmission' => $this->transmission,
            'car_body' => $this->carBody,
            'doors' => $this->doors,
            'finition' => $this->finition,
            'displacement' => $this->displacement,
            'power' => $this->power,
            'version' => $this->version,
            'km' => $this->km,
            'dt_entry_service' => $this->dt_entry_service,
            'dt_valuation' => $this->dt_valuation,

            'score_recognition' => $this->scoreRecognition,
            'score_valuation' => $this->scoreValuation,
            'estimate_price' => $this->estimate_price,
            'price' => $this->price,
            'currency' => $this->currency,

            'owner_type' => $this->owner_type,
            'available' => $this->available,
            'smoking' => $this->smoking,
            'duplicate_keys' => $this->duplicate_keys,
            'sale_reason' => $this->sale_reason,
            'hand_number' => $this->hand_number,
            'state' => $this->state,
            'country' => $this->country,
            'owner' => new UserResource($this->whenLoaded('user')),
            'equipments' => $equipments
        ];
    }
}

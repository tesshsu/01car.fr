<?php

namespace App\Http\Resources;

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
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'prenium' => $this->prenium,

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
            'price' => $this->price,
            'currency' => $this->currency,
            'owner' => new UserResource($this->whenLoaded('user')),
        ];
    }
}

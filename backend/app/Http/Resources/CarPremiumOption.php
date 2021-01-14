<?php

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class CarPremiumOption extends JsonResource
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
            'under_warranty'=> $this->under_warranty > 0 ? true : false,
            'accident'=> $this->accident > 0 ? true : false,
            'defects'=> $this->defects > 0 ? true : false,
            'km_certificate'=> $this->km_certificate > 0 ? true : false,
            'technical_check_ok'=> $this->technical_check_ok > 0 ? true : false,
            'periodic_maintenance'=> $this->periodic_maintenance > 0 ? true : false,
            'next_maintenance_under_5000km'=> $this->next_maintenance_under_5000km > 0 ? true : false,
            'purchase_invoice'=> $this->purchase_invoice > 0 ? true : false,
            'gray_card'=> $this->gray_card > 0 ? true : false,
            'maintenance_log' => $this->maintenance_log > 0 ? true : false,
        ];
    }
}

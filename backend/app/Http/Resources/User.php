<?php

namespace App\Http\Resources;

use App\Http\Resources\Role as RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class User extends JsonResource
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
            'created_at' =>  Carbon::parse($this->created_at)->toIso8601String(),
            'updated_at' =>  Carbon::parse($this->updated_at)->toIso8601String(),
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone
        ];
    }
}

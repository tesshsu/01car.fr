<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserResource;
use App\Http\Resources\Car as CarResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class Favorite extends JsonResource
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
            'created_at' => Carbon::parse($this->created_at)->toIso8601String(),
            'updated_at' => Carbon::parse($this->updated_at)->toIso8601String(),
            'category' => $this->category,
            'entity_id' => $this->entity_id,
            'entity' => new CarResource($this->whenLoaded('car')),
            'owner' => new UserResource($this->whenLoaded('user')),
        ];
    }
}

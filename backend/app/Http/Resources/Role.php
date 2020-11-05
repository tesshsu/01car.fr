<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Role extends JsonResource
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
            'created_at' => \Carbon\Carbon::parse($this->created_at)->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::parse($this->updated_at)->format('Y-m-d H:i:s'),
            'name' => $this->name,
            'permissions' => $this->permissions->map(function ($perm) {
                return $perm->permission;
            }),
        ];
    }
}

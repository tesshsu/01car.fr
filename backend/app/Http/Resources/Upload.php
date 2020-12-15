<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

class Upload extends JsonResource
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
            'mime_content_type' => $this->mime_content_type,
            'size' => $this->size,
            'path' => $this->path,
            'url' => Storage::url($this->path . $this->name),
        ];
    }
}

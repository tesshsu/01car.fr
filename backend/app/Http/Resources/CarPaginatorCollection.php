<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\Car as CarResource;

class CarPaginatorCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'current_page'=>  $this->currentPage(),
            'from'=> $this-> firstItem(),
            'to'=> $this->lastItem(),
            'per_page'=> intval($this->perPage()),
            'last_page'=> $this->lastPage(),
            'total'=> $this->total(),
            'data' => CarResource::collection( $this->collection)
        ];
    }
}

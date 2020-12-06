<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarAttribute extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'car_attributes';

    protected $fillable = ['car_id', 'category', 'name'];

    public static $fields_sizeMax = array(
        'category' => 32,
        'name' => 64,
    );

    public static function fieldsSizeMax($name)
    {
        return self::$fields_sizeMax[$name];
    }


    public function car()
    {
        return $this->belongsTo(Car::class);
    }

}

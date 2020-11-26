<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    public static $fields_sizeMax = array(
        'brand' => 32,
        'model' => 32,
        'generation' => 8,
        'fuel' => 8,
        'transmission' => 16,
        'carBody' => 32,
        'finition' => 32,
        'displacement' => 16,
        'version' => 32,
        'currency' => 4,

    );

    public static function fieldsSizeMax($name)
    {
        return self::$fields_sizeMax[$name];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'brand',
        'model',
        'generation',
        'fuel',
        'transmission',
        'carBody',
        'finition',
        'displacement',
        'version',
        'price',
        'currency',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

}
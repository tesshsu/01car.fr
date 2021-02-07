<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payments';

    public static $fields_sizeMax = array(
        'description' => 128,
        'provider' => 16,
        'provider_user_id'=> 256,
        'provider_payment_id'=> 256,
        'amount' => 16,
        'currency' => 3,
        'status' => 12,
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
        'description',
        'provider',
        'amount',
        'currency',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function car(): HasOne
    {
        return $this->hasOne(Car::class, 'id', 'car_id');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPremiumOption extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'car_premium_options';

    protected $fillable = [
        'under_warranty',
        'accident',
        'defects',
        'km_certificate',
        'technical_check_ok',
        'periodic_maintenance',
        'next_maintenance_under_5000km',
        'purchase_invoice',
        'gray_card',
        'maintenance_log'
        ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}

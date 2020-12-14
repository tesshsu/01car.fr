<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Car extends Model
{
    use HasFactory;

    protected $table = 'cars';

    public static $fields_sizeMax = array(
        'brand' => 32,
        'model' => 32,
        'generation' => 8,
        'fuel' => 8,
        'transmission' => 16,
        'carBody' => 32,
        'finishing' => 32,
        'displacement' => 16,
        'version' => 32,
        'currency' => 4,
        'owner_type' => 8,
        'available' => 12,
        'sale_reason' => 8,
        'state' => 12,
        'country' => 2,
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
        'phase',
        'id_carBody',
        'fuel',
        'transmission',
        'carBody',
        'doors',
        'finishing',
        'displacement',
        'power',
        'version',
        'km',
        'dt_entry_service',
        'dt_valuation',
        'scoreRecognition',
        'scoreValuation',

        'estimate_price',
        'price',
        'currency',
        'owner_type',
        'available',
        'smoking',
        'duplicate_keys',
        'sale_reason',
        'hand_number',
        'state',
        'country',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function attributes(): HasMany
    {
        return $this->hasMany(CarAttribute::class);
    }

    /**
     * The uploads that belong to the car.
     */
    public function uploads(): BelongsToMany
    {
        return $this->belongsToMany(Upload::class, 'cars_uploads');
    }

    public function getUploadPath(): string
    {
        return  'files/u' . $this->user_id . '/c'  . $this->id . '/uploads/';
    }

}

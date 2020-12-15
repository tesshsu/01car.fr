<?php

namespace App\Models;

use App\Constants\AvailablePeriod;
use App\Constants\CarState;
use App\Constants\EquipmentCategory;
use App\Constants\Equipments\PremiumEquipment;
use App\Constants\OwnerType;
use App\Constants\SaleReason;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

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
        'license_plate' => 16
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
        'score_recognition',
        'score_valuation',

        'estimate_price',
        'price',
        'currency',
        'license_plate',

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

    public static function calcConfidenceNote(Car $car){
        $confidence_note = 0;
        if(Str::of($car->licence_plate)->trim()->isNotEmpty()) $confidence_note++;
        if($car->owner_type == OwnerType::PRIVATE ) $confidence_note++;
        if($car->available == AvailablePeriod::IMMEDIATELY ) $confidence_note++;
        if(!$car->smoking) $confidence_note++;
        if($car->duplicate_keys) $confidence_note++;
        if($car->sale_reason == SaleReason::CHANGE) $confidence_note++;
        if($car->estimate_price  > 0) $confidence_note++;
        if($car->hand_number == 1 || $car->hand_number == 2) $confidence_note++;
        if($car->state == CarState::NEW) $confidence_note++;
        if($car->country == 'FR') $confidence_note++;

        $attributes = $car->attributes()->getResults()->filter(function ($value, $key) {
            return $value->category == EquipmentCategory::PREMIUM;
        })->map(function ($item, $key) {
                return $item->name;
        })->all();

        if( Arr::exists($attributes, PremiumEquipment::UNDER_WARRANTY)) $confidence_note++;
        if( !Arr::exists($attributes, PremiumEquipment::HAD_ACCIDENT)) $confidence_note++;
        if( !Arr::exists($attributes, PremiumEquipment::DEFECTS)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::KM_CERTIFICATE)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::TECHNICAL_CHECK_OK)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::PERIODIC_MAINTENANCE)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::NEXT_MAINTENANCE_UNDER_5000KM)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::PURCHASE_INVOICE)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::GRAY_CARD)) $confidence_note++;
        if( Arr::exists($attributes, PremiumEquipment::MAINTENANCE_LOG)) $confidence_note++;

        return $confidence_note;
    }

}

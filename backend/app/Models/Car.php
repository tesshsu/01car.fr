<?php

namespace App\Models;

use App\Constants\AvailablePeriod;
use App\Constants\CarState;
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
        'sale_reason' => 16,
        'state' => 12,
        'country' => 2,
        'postal_code' => 5,
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

        'price',
        'estimate_price_min',
        'estimate_price_max',

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
        'postal_code'
    ];

    protected $autovisual_fields = [
        'generation' =>'generation',
        'phase'=>'phase',
        'id_carBody'=>'id_carBody',
        'carBody'=>'carBody',
        'finishing'=>'finishing',
        'displacement'=>'displacement',
        'transmission'=>'transmission',
        'doors'=>'doors',
        'power'=>'power',
        'version'=>'version',
        'dt_valuation'=>'dt_valuation',
        'score_recognition'=>'scoreRecognition',
        'score_valuation'=>'scoreValuation',

        'estimate_price_min'=>'estimate_price_min',
        'estimate_price_max'=>'estimate_price_max',
    ];

    public function getAutovisualFillable()
    {
        return $this->autovisual_fields;
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function attributes(): HasMany
    {
        return $this->hasMany(CarAttribute::class);
    }

    public function premiumOptions(): hasOne
    {
        return $this->hasOne(CarPremiumOption::class);
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
        return 'files/u' . $this->user_id . '/c' . $this->id . '/uploads/';
    }

    public static function calcConfidenceNote(Car $car)
    {
        $confidence_note = 0;
        if (Str::of($car->licence_plate)->trim()->isNotEmpty()) $confidence_note++;
        if ($car->owner_type == OwnerType::PRIVATE) $confidence_note++;
        if ($car->available == AvailablePeriod::IMMEDIATELY) $confidence_note++;
        if (!$car->smoking) $confidence_note++;
        if ($car->duplicate_keys) $confidence_note++;
        if (Arr::exists(SaleReason::list(), $car->sale_reason)) $confidence_note++;
        if ($car->price > 0) $confidence_note++;
        if ($car->hand_number == 1 || $car->hand_number == 2) $confidence_note++;
        if ($car->state == CarState::NEW) $confidence_note++;
        if ($car->country == 'FR') $confidence_note++;


        $premiumOptions = $car->premiumOptions()->getResults();
        if ($premiumOptions) {
            if ($premiumOptions->under_warranty) $confidence_note++;
            if (!$premiumOptions->accident) $confidence_note++;
            if (!$premiumOptions->defects) $confidence_note++;
            if ($premiumOptions->km_certificate) $confidence_note++;
            if ($premiumOptions->technical_check_ok) $confidence_note++;
            if ($premiumOptions->periodic_maintenance) $confidence_note++;
            if ($premiumOptions->next_maintenance_under_5000km) $confidence_note++;
            if ($premiumOptions->purchase_invoice) $confidence_note++;
            if ($premiumOptions->gray_card) $confidence_note++;
            if ($premiumOptions->maintenance_log) $confidence_note++;
        }

        return $confidence_note;
    }

    public function getAutovisualData()
    {
        return [
            "txt" => $this->brand . ' ' . $this->model,
            "km" => $this->km,
            "dt_entry_service" => $this->dt_entry_service,
            "fuel" => $this->fuel === 'essence' ? 'gasoline' : $this->fuel,
            "country_ref" => $this->country
        ];
    }

}

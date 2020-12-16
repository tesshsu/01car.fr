<?php

namespace Database\Factories;

use App\Constants\AvailablePeriod;
use App\Constants\EquipmentCategory;
use App\Constants\CarState;
use App\Constants\OwnerType;
use App\Constants\SaleReason;
use App\Constants\TimeConstant;
use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class CarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Car::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'expire_at' => Carbon::now()->addDays(TimeConstant::EXPIRATION_DURATION_IN_DAYS),
            'premium' => $this->faker->boolean(),
            'brand' => $this->faker->randomElement( ['renault', 'peugeot', 'porche']),
            'model' => $this->faker->randomElement( ['205', '306', 'cayenne']),
            'generation' => Str::random(2),
            'phase' => $this->faker->randomDigit(),
            'id_carBody' => $this->faker->randomDigit(),
            'fuel' => $this->faker->randomElement( ['diesel', 'gpl', 'essence']),
            'transmission' => $this->faker->randomElement(['automatic','manual']),
            'carBody' => $this->faker->word(),
            'doors' => $this->faker->randomElement([3, 5 ]),
            'finishing' => $this->faker->word(),
            'displacement' => $this->faker->word(),
            'power' => $this->faker->numberBetween(50, 1000),
            'version' =>  $this->faker->word(),
            'km' => $this->faker->randomNumber(),

            'dt_entry_service' => $this->faker->dateTime(),
            'dt_valuation' => $this->faker->dateTime(),

            'score_recognition' => $this->faker->randomFloat( 1, 0.0, 10.0),
            'score_valuation' => $this->faker->randomFloat( 1, 0.0, 10.0),
            'estimate_price' => $this->faker->randomFloat( 2, 500.0, 15000.0),
            'price' => $this->faker->randomFloat( 2, 500.0, 15000.0),
            'currency' => 'EUR',

            'license_plate' => Str::upper(Str::random(2) . '-' . $this->faker->numberBetween(100, 999) . '-' . Str::random(2)),

            'owner_type'=> $this->faker->randomElement( OwnerType::list() ),
            'available'=> $this->faker->randomElement( AvailablePeriod::list() ),
            'smoking'=> $this->faker->boolean(),
            'duplicate_keys'=> $this->faker->boolean(),
            'sale_reason'=> $this->faker->randomElement( SaleReason::list() ),
            'hand_number'=> $this->faker->numberBetween(1, 3),
            'state'=> $this->faker->randomElement( CarState::list() ),
            'country'=> $this->faker->randomElement( ['FR', 'ZZ'] ),
            'confidence_note' =>  $this->faker->numberBetween(0, 20),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;
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
            'prenium' => $this->faker->boolean(),
            'brand' => $this->faker->randomElement( ['renault', 'peugeot', 'porche']),
            'model' => $this->faker->randomElement( ['205', '306', 'cayenne']),
            'generation' => Str::random(2),
            'phase' => $this->faker->randomDigit(),
            'id_carBody' => $this->faker->randomDigit(),
            'fuel' => $this->faker->randomElement( ['diesel', 'gpl', 'essence']),
            'transmission' => $this->faker->randomElement(['automatic','manual']),
            'carBody' => $this->faker->word(),
            'doors' => $this->faker->randomElement([3, 5 ]),
            'finition' => $this->faker->word(),
            'displacement' => $this->faker->word(),
            'power' => $this->faker->numberBetween(50, 1000),
            'version' =>  $this->faker->word(),
            'km' => $this->faker->randomNumber(),

            'dt_entry_service' => $this->faker->dateTime(),
            'dt_valuation' => $this->faker->dateTime(),

            'scoreRecognition' => $this->faker->randomFloat( 1, 0.0, 10.0),
            'scoreValuation' => $this->faker->randomFloat( 1, 0.0, 10.0),
            'price' => $this->faker->randomFloat( 2, 500.0, 15000.0),
            'currency' => 'EUR'
        ];
    }
}

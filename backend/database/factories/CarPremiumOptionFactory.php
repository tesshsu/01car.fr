<?php

namespace Database\Factories;

use App\Constants\EquipmentCategory;
use App\Models\CarAttribute;
use App\Models\CarPremiumOption;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarPremiumOptionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CarPremiumOption::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'under_warranty'=> $this->faker->boolean(),
            'accident'=> $this->faker->boolean(),
            'defects'=> $this->faker->boolean(),
            'km_certificate'=> $this->faker->boolean(),
            'technical_check_ok'=> $this->faker->boolean(),
            'periodic_maintenance'=> $this->faker->boolean(),
            'next_maintenance_under_5000km'=> $this->faker->boolean(),
            'purchase_invoice'=> $this->faker->boolean(),
            'gray_card'=> $this->faker->boolean(),
            'maintenance_log'=> $this->faker->boolean(),
        ];
    }
}

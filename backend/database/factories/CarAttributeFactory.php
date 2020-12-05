<?php

namespace Database\Factories;

use App\Constants\EquipmentCategory;
use App\Models\CarAttribute;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarAttributeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CarAttribute::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category' => $this->faker->randomElement(EquipmentCategory::list()),
            'name' => function (array $attributes) {
                return $this->faker->randomElement(EquipmentCategory::listEquipements($attributes['category']));
            },
        ];
    }
}

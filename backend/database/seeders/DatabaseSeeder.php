<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\CarEquipment;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);

        User::factory(100)
            ->has( Car::factory()->count(1)->has(CarEquipment::factory()->count(rand (0 , 15) )))
            ->create();

    }
}

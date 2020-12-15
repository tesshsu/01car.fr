<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\CarAttribute;
use App\Models\Upload;
use App\Models\User;
use Database\Factories\UploadFactory;
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
            ->has( Car::factory()
                ->has( CarAttribute::factory(rand (0 , 15)), 'attributes' )
                ->has( Upload::factory(rand (1 , 4))->state(function (array $attributes, Car $car) {
                        $path = $car->getUploadPath();
                        $res = UploadFactory::addFile($attributes['name'] ,
                            $attributes['mime_content_type'],
                            $path,
                            $attributes['path']
                        );
                        return [
                            'name' => $res['name'],
                            'path' => $path,
                            'size' => $res['size'],
                            'mime_content_type' => $res['mime_content_type'],
                            ];
                    }
                ),  'uploads')
            )
            ->create();

    }
}

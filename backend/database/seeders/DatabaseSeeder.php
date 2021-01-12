<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\CarAttribute;
use App\Models\CarPremiumOption;
use App\Models\Upload;
use App\Models\User;
use Database\Factories\UploadFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use function PHPUnit\Framework\isEmpty;

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
            ->has(Car::factory()
                ->has(CarAttribute::factory(rand(0, 15)), 'attributes')

                ->has(CarPremiumOption::factory(1)->configure(), 'premiumOptions')
                ->has(Upload::factory(rand(1, 4))->state(function (array $attributes, Car $car) {
                    $path = $car->getUploadPath();

                    // check if file with same name exist
                    $allFiles = Storage::disk('public')->allFiles($path);
                    if (!empty($allFiles) > 0)
                    {
                        $file = $allFiles[rand(0, sizeof($allFiles) - 1)];
                        $attributes['name'] = Str::substr($file, Str::of($file)->dirname()->length() + 1);
                    }

                    $res = UploadFactory::addFile($attributes['name'],
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
                ), 'uploads')
                ->afterCreating(function (Car $car) {
                    $car->confidence_note = Car::calcConfidenceNote($car);
                    $car->save();
                })
            )
            ->create();

    }
}

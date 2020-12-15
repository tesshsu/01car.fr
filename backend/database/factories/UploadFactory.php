<?php

namespace Database\Factories;

use App\Models\Upload;
use Database\Seeders\ImageFaker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Upload::class;

    protected $imageFaker;

    public function __construct($count = null,
                                ?Collection $states = null,
                                ?Collection $has = null,
                                ?Collection $for = null,
                                ?Collection $afterMaking = null,
                                ?Collection $afterCreating = null,
                                $connection = null)
    {
        parent::__construct($count,
            $states,
            $has,
            $for,
            $afterMaking,
            $afterCreating,
            $connection);
        $this->imageFaker = new ImageFaker();
    }


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'name' => $this->faker->word() . '.jpg',
            'mime_content_type' => 'image/jpeg',
            'size' => 0,
            //'path' => $this->imageFaker->imageFaker(360, 360, 'transport', true, 'car'),
            'path' => $this->faker->imageUrl(360, 360, 'transport', true, 'car'),
        ];

    }

    public static function addFile(string $filename, string $mime, string $path, string $url)
    {
        $allFiles = Storage::disk('public')->allFiles($path);
        if (!empty($allFiles)) {
            $filename = Str::substr($allFiles[0], Str::of($allFiles[0])->dirname()->length() + 1);
        } else {

            $temp = tmpfile();

            $content = file_get_contents($url);

            if ($content) {
                fwrite($temp, $content);
            }

            $uploadedFile = new File(stream_get_meta_data($temp)['uri']);
            Storage::disk('public')->putFileAs(
                $path,
                $uploadedFile,
                $filename
            );
        }

        return [
            'name' => $filename,
            'mime_content_type' => $mime,
            'size' => Storage::disk('public')->size($path . $filename),
            'path' => $path,
        ];
    }
}

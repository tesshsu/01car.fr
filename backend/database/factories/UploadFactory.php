<?php

namespace Database\Factories;

use App\Models\Upload;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\DB;
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
            'name' => $this->faker->word(). '.jpg',
            'mime_content_type' => 'image/jpeg',
            'size' => 0,
            'path' => $this->faker->imageUrl(360, 360, 'transport', true, 'car'),
        ];

    }

    public static function addFile(string $filename, string $mime, string $path, string $url)
    {
        $temp = tmpfile();
        fwrite($temp, file_get_contents($url));

        $uploadedFile = new File(stream_get_meta_data($temp)['uri']);
        Storage::disk('public')->putFileAs(
            $path,
            $uploadedFile,
            $filename
        );

        return [
            'name' => $filename,
            'mime_content_type' => $mime,
            'size' => Storage::disk('public')->size($path . $filename),
            'path' => $path,
        ];
    }
}

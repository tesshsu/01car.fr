<?php

namespace Database\Factories;

use App\Models\Upload;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Psy\Exception\ErrorException;

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
            'name' => $this->faker->word() . '.jpg',
            'mime_content_type' => 'image/jpeg',
            'size' => 0,
            'path' => $this->faker->imageUrl(360, 360, 'transport', true, 'car'),
        ];

    }

    public static function addFile(string $filename, string $mime, string $path, string $url)
    {
        $temp = tmpfile();
        $content = false;

        set_error_handler(
            function ($severity, $message, $file, $line) {
                throw new ErrorException($message, $severity, $severity, $file, $line);
            }
        );

        try {
            $content = file_get_contents($url);
        } catch (ErrorException   $e) {
            echo $e->getMessage();
            try {
                $content = file_get_contents(str_replace("lorempixel.com", "loremflickr.com", $url));
            } catch (ErrorException   $e1) {
                $content = file_get_contents(str_replace("lorempixel.com", "placeimg.com", $url));
            }
        }

        restore_error_handler();

        if ($content) {
            fwrite($temp, $content);
        }

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

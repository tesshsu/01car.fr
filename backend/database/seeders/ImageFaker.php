<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Container\Container;

class ImageFaker
{

    const LOREM_PIXEL = 'lorempixel.com';
    const LOREM_FLICKR = 'loremflickr.com';
    const PLACE_IMG = 'placeimg.com';
    const PLACE_HOLDER = 'placeholder.com';

    /**
     * The current Faker instance.
     *
     * @var \Faker\Generator
     */
    protected $faker;

    protected $mode = ImageFaker::LOREM_PIXEL;

    /**
     * Create a new imageFaker .
     *
     * @return void
     */
    public function __construct()
    {
        $this->faker = $this->withFaker();
    }

    protected function withFaker()
    {
        return Container::getInstance()->make(Generator::class);
    }

    public function withMode($mode): ImageFaker
    {
        $this->mode = mode;
        return $this;
    }

    public function imageFaker(int $width = 640, int $height = 480, string $category = null, bool $randomize = true, string $word = null, bool $gray = false)
    {
        switch ($this->mode) {
            case ImageFaker::LOREM_FLICKR :
                return $this->loremflickrImageFaker($width, $height, $category, $randomize, $word);
            case ImageFaker::PLACE_IMG :
                return $this->placeImgImageFaker($width, $height, $category, $randomize, $word);
            case ImageFaker::PLACE_HOLDER :
                return $this->placeHolderImageFaker($width, $height, $category, $randomize, $word);
            case ImageFaker::LOREM_PIXEL :
            default:
                return $this->lorempixelImageFaker($width, $height, $category, $randomize, $word);
        }
    }

    public function lorempixelImageFaker(int $width = 640,
                                         int $height = 480,
                                         string $category = null,
                                         bool $randomize = true,
                                         string $word = null,
                                         bool $gray = false): string
    {
        return $this->faker->imageUrl($width, $height, $category, $randomize, $word, $gray);
    }

    public function loremflickrImageFaker(int $width = 640,
                                          int $height = 480,
                                          string $category = null,
                                          bool $randomize = true,
                                          string $word = null,
                                          bool $gray = false): string
    {
        $baseUrl = 'https://' . ImageFaker::LOREM_FLICKR . '/';

        $url = "{$width}/{$height}/";

        if ($gray) {
            $url = "gray/" . $url;
        }

        if ($category) {
            $url .= "{$category}/";
            if ($word) {
                $url .= "{$word}/";
            }
        }

        return $baseUrl . $url;
    }


    public function placeImgImageFaker(int $width = 640,
                                       int $height = 480,
                                       string $category = null,
                                       bool $randomize = true,
                                       string $word = null,
                                       bool $gray = false): string
    {
        $baseUrl = "https://placeimg.com/";
        $url = "{$width}/{$height}/";

        static $categories = array('animals', 'arch', 'nature', 'people', 'tech');

        if ($category) {
            if (!in_array($category, $categories)) {
                throw new \InvalidArgumentException(sprintf('Unknown image category "%s"', $category));
            }
            $url .= "{$category}/";
        }

        if ($gray) {
            $url .= "grayscale/";
        }


        return $baseUrl . $url;
    }


    public function placeHolderImageFaker(int $width = 640,
                                          int $height = 480,
                                          string $category = null,
                                          bool $randomize = true,
                                          string $word = null,
                                          bool $gray = false)
    {
        // https://via.placeholder.com/728x90.jpg?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/
        $baseUrl = 'https://via.placeholder.com/';
        $url = "{$width}x{$height}.jpg/";

        if ($category) {
            $url .= "?text={$category}/";
            if ($word) {
                $url .= "{$word}/";
            }
        }

        return $baseUrl . $url;
    }
}

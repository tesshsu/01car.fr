<?php

namespace App\Constants;

abstract class FavoriteCategory
{
    const CAR = 'car';

    public static $available_categories_list = array(
        self::CAR,
    );

    public static function list()
    {
        return self::$available_categories_list;
    }

}


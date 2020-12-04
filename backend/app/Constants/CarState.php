<?php

namespace App\Constants;

abstract class CarState
{
    const NEW = 'new';
    const VERY_GOOD = 'very_good';
    const GOOD = 'good';
    const SATISFACTORY = 'satisfactory';

    public static $car_states_list = array(
        self::NEW,
        self::VERY_GOOD,
        self::GOOD,
        self::SATISFACTORY,
    );

    public static function list()
    {
        return self::$car_states_list;
    }

}

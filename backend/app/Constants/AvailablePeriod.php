<?php

namespace App\Constants;

abstract class AvailablePeriod
{
    const IMMEDIATELY = 'immediately';
    const ONE_MONTH = 'one_month';
    const LATER = 'later';
    const PRIVATE = 'private';

    public static $available_periods_list = array(
        self::IMMEDIATELY,
        self::ONE_MONTH,
        self::LATER,
        self::PRIVATE,
    );

    public static function list()
    {
        return self::$available_periods_list;
    }

}


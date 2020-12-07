<?php

namespace App\Constants;

abstract class AvailablePeriod
{
    const IMMEDIATELY = 'immediately';
    const ONE_MONTH = 'one_month';
    const LATER = 'later';


    public static $available_periods_list = array(
        self::IMMEDIATELY,
        self::ONE_MONTH,
        self::LATER,
    );

    public static function list()
    {
        return self::$available_periods_list;
    }

}


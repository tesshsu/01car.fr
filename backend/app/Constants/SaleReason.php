<?php

namespace App\Constants;

abstract class SaleReason
{
    const CHANGE = 'change';
    const OTHER = 'other';

    public static $sale_reason_list = array(
        self::CHANGE,
        self::OTHER,
    );

    public static function list()
    {
        return self::$sale_reason_list;
    }

}

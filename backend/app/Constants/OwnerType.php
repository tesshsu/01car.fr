<?php

namespace App\Constants;

abstract class OwnerType
{
    const PROFESSIONAL = 'pro';
    const PRIVATE = 'private';

    public static $owner_types_list = array(
        self::PROFESSIONAL,
        self::PRIVATE,
    );

    public static function list()
    {
        return self::$owner_types_list;
    }

}

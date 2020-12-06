<?php

namespace App\Constants\Equipments;

abstract class AntiTheftEquipment
{
    const ALARM = 'alarm';
    const IMMOBILIZER = 'immobilizer';
    const WINDOWS_ENGRAVING = 'windows_engraving';


    public static $anti_theft_list = array(
        self::ALARM,
        self::IMMOBILIZER,
        self::WINDOWS_ENGRAVING,
    );

    public static function list()
    {
        return self::$anti_theft_list;
    }

}


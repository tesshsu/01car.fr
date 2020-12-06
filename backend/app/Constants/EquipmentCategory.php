<?php

namespace App\Constants;

use App\Constants\Equipments\AntiTheftEquipment;
use App\Constants\Equipments\ComfortEquipment;
use App\Constants\Equipments\InsideEquipment;
use App\Constants\Equipments\OtherEquipment;
use App\Constants\Equipments\OutsideEquipment;
use App\Constants\Equipments\PreniumEquipment;

abstract class EquipmentCategory
{
    const OUTSIDE = 'outside';
    const INSIDE = 'inside';
    const ANTI_THEFT = 'anti_theft';
    const CONFORT = 'confort';
    const OTHER = 'other';
    const PRENIUM = 'prenium';

    public static $available_periods_list = array(
        self::OUTSIDE,
        self::INSIDE,
        self::ANTI_THEFT,
        self::CONFORT,
        self::OTHER,
        self::PRENIUM,
    );

    public static function list()
    {
        return self::$available_periods_list;
    }

    public static function listEquipements($category)
    {
        switch ($category) {
            case   self::OUTSIDE:
                return OutsideEquipment::list();
            case self::INSIDE:
                return InsideEquipment::list();
            case self::ANTI_THEFT:
                return AntiTheftEquipment::list();
            case self::CONFORT:
                return ComfortEquipment::list();
            case self::OTHER:
                return OtherEquipment::list();
            case self::PRENIUM:
                return PreniumEquipment::list();
            default:
                return [];
        }
    }

}


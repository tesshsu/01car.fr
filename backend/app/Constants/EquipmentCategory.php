<?php

namespace App\Constants;

use App\Constants\Equipments\AntiTheftEquipment;
use App\Constants\Equipments\ComfortEquipment;
use App\Constants\Equipments\InsideEquipment;
use App\Constants\Equipments\OtherEquipment;
use App\Constants\Equipments\OutsideEquipment;
use App\Constants\Equipments\PremiumEquipment;

abstract class EquipmentCategory
{
    const OUTSIDE = 'outside';
    const INSIDE = 'inside';
    const ANTI_THEFT = 'anti_theft';
    const COMFORT = 'comfort';
    const OTHER = 'other';
    const PREMIUM = 'premium';
    const SECURITY = 'security';

    public static $available_category_list = array(
        self::OUTSIDE,
        self::INSIDE,
        self::ANTI_THEFT,
        self::COMFORT,
        self::OTHER,
        self::PREMIUM,
        self::SECURITY,
    );

    public static function list()
    {
        return self::$available_category_list;
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
            case self::COMFORT:
                return ComfortEquipment::list();
            case self::OTHER:
                return OtherEquipment::list();
            case self::PREMIUM:
                return PremiumEquipment::list();
            default:
                return [];
        }
    }

}


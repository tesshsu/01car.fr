<?php

namespace App\Constants\Equipments;

abstract class OtherEquipment
{
    const FLAT_TIRE_REPAIR_KIT = 'flat_tire_repair_kit';
    const START_STOP_SYSTEM = 'start_stop_system';


    public static $other_equipment_list = array(
        self::FLAT_TIRE_REPAIR_KIT,
        self::START_STOP_SYSTEM,
    );

    public static function list()
    {
        return self::$other_equipment_list;
    }

}


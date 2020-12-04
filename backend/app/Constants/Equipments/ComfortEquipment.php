<?php

namespace App\Constants\Equipments;

abstract class ComfortEquipment
{
    const BLUETOOTH = 'Bluetooth';
    const KEYLESS_ENTRY_SYSTEM = 'keyless_entry_system';
    const VIRTUAL_COCKPIT = 'virtual_cockpit';


    public static $comfort_list = array(
        self::BLUETOOTH,
        self::KEYLESS_ENTRY_SYSTEM,
        self::VIRTUAL_COCKPIT
    );

    public static function list()
    {
        return self::$comfort_list;
    }

}

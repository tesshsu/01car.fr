<?php

namespace App\Constants\Equipments;

abstract class OutsideEquipment
{

    const SUNROOF = 'sunroof';
    const _4_WHEEL_DRIVE = '4_wheel_drive';
    const FRONT_REAR_PARKING_AID = 'front_rear_parking_aid';
    const REVERSING_CAMERA = 'reversing_camera';
    const REVERSING_RADAR = 'reversing_radar';
    const HITCH = 'hitch';
    const ALUMINUM_RIMS = 'aluminum_rims';
    const SPORT_PACK = 'sport_pack';
    const BI_XENON_HEADLAMPS = 'bi_xenon_headlamps';
    const ADAPTIVE_REGULATOR = 'adaptive_regulator';
    const DE_ICING_MIRRORS = 'de_icing_mirrors';
    const ELECTRIC_MIRRORS = 'electric_mirrors';
    const FOLDING_MIRRORS = 'folding_mirrors';
    const ELECTRICALLY_FOLDING_MIRRORS = 'electrically_folding_mirrors';
    const CHROME_TAILPIPES = 'chrome_tailpipes';


    public static $outside_equipment_list = array(
        self::SUNROOF,
        self::_4_WHEEL_DRIVE,
        self::FRONT_REAR_PARKING_AID,
        self::REVERSING_CAMERA,
        self::REVERSING_RADAR,
        self::ALUMINUM_RIMS,
        self::SPORT_PACK,
        self::BI_XENON_HEADLAMPS,
        self::ADAPTIVE_REGULATOR,
        self::DE_ICING_MIRRORS,
        self::ELECTRIC_MIRRORS,
        self::FOLDING_MIRRORS,
        self::ELECTRICALLY_FOLDING_MIRRORS,
        self::CHROME_TAILPIPES,
    );

    public static function list()
    {
        return self::$outside_equipment_list;
    }

}


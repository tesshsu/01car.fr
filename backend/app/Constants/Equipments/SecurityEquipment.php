<?php

namespace App\Constants\Equipments;

abstract class SecurityEquipment
{
    const AIRBAGS = 'airbags';
    const APPLE_CAR_PLAY = 'apple_car_play';
    const ABS = 'abs';
    const HEAD_UP_DISPLAY = 'head_up_display';
    const HILL_START_AID = 'hill_start_aid';
    const LINE_CROSSING_ALERT = 'line_crossing_alert';
    const BLIND_SPOT_WARNING = 'blind_spot_warning';
    const AUTOMATIC_WIPERS = 'automatic_wipers';
    const AUTOMATIC_LIGHTS_AND_WIPERS = 'automatic_lights_and_wipers';
    const ISOFIX_BINDINGS = 'isofix_bindings';
    const BLUETOOTH_HANDS_FREE_PHONE_KIT= 'bluetooth_hands_free_phone_kit';
    const LED_DAYTIME_RUNNING_LIGHTS = 'LED_daytime_running_lights';


    public static $security_equipements_list = array(
        self::AIRBAGS,
        self::APPLE_CAR_PLAY,
        self::ABS,
        self::HEAD_UP_DISPLAY,
        self::HILL_START_AID,
        self::LINE_CROSSING_ALERT,
        self::BLIND_SPOT_WARNING,
        self::AUTOMATIC_WIPERS,
        self::AUTOMATIC_LIGHTS_AND_WIPERS,
        self::ISOFIX_BINDINGS,
        self::BLUETOOTH_HANDS_FREE_PHONE_KIT,
        self::LED_DAYTIME_RUNNING_LIGHTS,
    );

    public static function list()
    {
        return self::$security_equipements_list;
    }


}


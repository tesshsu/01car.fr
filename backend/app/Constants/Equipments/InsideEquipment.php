<?php

namespace App\Constants\Equipments;

abstract class InsideEquipment
{

    const ELECTRIC_WINDOWS = 'electric_windows';
    const BENCH_1_3_2_3 = 'bench_1/3_-_2/3';
    const FOLDING_BENCH = 'folding_bench';
    const AUTOMATIC_GEARBOX = 'automatic_gearbox';
    const AUTOMATIC_AIR_CONDITIONING = 'automatic_air_conditioning';
    const KEYLESS_START = 'keyless_start';
    const POWER_STEERING = 'power_steering';
    const TOUCH_SCREEN = 'touch_screen';
    const ELECTRICAL_CLOSING = 'electrical_closing';
    const AUTOMATIC_ELECTRICAL_CLOSING = 'automatic_electrical_closing';
    const GPS = 'GPS';
    const LEATHER_INTERIOR = 'leather_interior';
    const FOLDING_MIRRORS = 'folding_mirrors';
    const HANDS_FREE_PHONE_KIT = 'hands_free_phone_kit';
    const ELECTRIC_TRUNK_OPEN = 'electric_trunk_open';
    const PADDLE_SHIFTERS = 'paddle_shifters';
    const HEATED_WINDSHIELD = 'heated_windshield';
    const ALUMINUM_CRANKSET = 'aluminum_crankset';
    const PHONE_PREDISPOSITION = 'phone_predisposition';
    const _12V_SOCKET = '12V_socket';
    const MINI_USB_AUDIO_JACK = 'mini_USB_audio_jack';
    const usb_audio_jack = 'USB_audio_jack';
    const SPEED_REGULATOR = 'speed_regulator';
    const HEIGHT_ADJUSTABLE_DRIVER_S_SEAT = 'height_adjustable_driver_s_seat';
    const HEATED_SEATS = 'heated_seats';
    const ELECTRIC_MEMORY_SEATS = 'electric_memory_seats';
    const DARK_TINTED_WINDOWS = 'dark_tinted_windows';
    const SPORT_STEERING_WHEEL = 'sport_steering_wheel';

    public static $inside_equipement_list = array(
        self:: ELECTRIC_WINDOWS,
        self:: BENCH_1_3_2_3,
        self:: FOLDING_BENCH,
        self::AUTOMATIC_GEARBOX,
        self::AUTOMATIC_AIR_CONDITIONING,
        self::KEYLESS_START,
        self::POWER_STEERING,
        self::TOUCH_SCREEN,
        self::ELECTRICAL_CLOSING,
        self::AUTOMATIC_ELECTRICAL_CLOSING,
        self::GPS,
        self::LEATHER_INTERIOR,
        self::FOLDING_MIRRORS,
        self::HANDS_FREE_PHONE_KIT,
        self::ELECTRIC_TRUNK_OPEN,
        self::PADDLE_SHIFTERS,
        self::HEATED_WINDSHIELD,
        self::ALUMINUM_CRANKSET,
        self::PHONE_PREDISPOSITION,
        self::_12V_SOCKET,
        self::MINI_USB_AUDIO_JACK,
        self::usb_audio_jack,
        self::SPEED_REGULATOR,
        self::HEIGHT_ADJUSTABLE_DRIVER_S_SEAT,
        self::HEATED_SEATS,
        self::ELECTRIC_MEMORY_SEATS,
        self::DARK_TINTED_WINDOWS,
        self::SPORT_STEERING_WHEEL,
    );

    public static function list()
    {
        return self::$inside_equipement_list;
    }


}


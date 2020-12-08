<?php

namespace App\Constants\Equipments;

abstract class PremiumEquipment
{

    const UNDER_WARRANTY = 'under_warranty';
    const HAD_ACCIDENT = 'had_accident';
    const DEFECTS = 'defects';
    const KM_CERTIFICATE = 'km_certificate';
    const TECHNICAL_CHECK_OK = 'technical_check_ok';
    const PERIODIC_MAINTENANCE = 'periodic_maintenance';
    const NEXT_MAINTENANCE_UNDER_5000KM = 'next_maintenance_under_5000km';
    const PURCHASE_INVOICE = 'purchase_invoice';
    const GRAY_CARD = 'gray_card';
    const MAINTENANCE_LOG = 'maintenance_log';

    public static $available_periods_list = array(
        self::UNDER_WARRANTY,
        self::HAD_ACCIDENT,
        self::DEFECTS,
        self::KM_CERTIFICATE,
        self::TECHNICAL_CHECK_OK,
        self::PERIODIC_MAINTENANCE,
        self::NEXT_MAINTENANCE_UNDER_5000KM,
        self::PURCHASE_INVOICE,
        self::GRAY_CARD,
        self::MAINTENANCE_LOG,

    );

    public static function list()
    {
        return self::$available_periods_list;
    }




}


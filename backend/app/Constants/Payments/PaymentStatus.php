<?php

namespace App\Constants\Payments;

abstract class PaymentStatus
{
    const SUCCEEDED = 'succeeded';
    const PENDING = 'pending';
    const FAILED = 'failed';


    public static $payment_status_list = array(
        self::SUCCEEDED,
        self::FAILED,
        self::OTHER,
    );

    public static function list()
    {
        return self::$payment_status_list;
    }

}

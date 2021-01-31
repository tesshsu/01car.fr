<?php

namespace App\Constants\Payments;

abstract class PaymentProvider
{
    const STRIPE = 'stripe';


    public static $payment_provider_list = array(
        self::STRIPE,
    );

    public static function list()
    {
        return self::$payment_provider_list;
    }

}

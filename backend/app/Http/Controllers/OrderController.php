<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Stripe\Exception\ApiErrorException;
use Stripe\Order;
use Stripe\Stripe;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $config = config()->get('services.stripe');
        // Get order from stripe API
        Stripe::setApiKey($config['secret_key']);

        $stripe = new \Stripe\StripeClient(
            $config['secret_key']
        );

        $user = auth()->user();


        $token = $stripe->tokens->create([
            'card' => [
                'number'    => '4242424242424242',
                'exp_month' => 6,
                'exp_year'  => 2021,
                'cvc'       => 314,
            ],
        ]);

        $source = $stripe->sources->create([
            'type' => 'card',
            'currency' => 'eur',
            'owner' => [
                'email' => $user->email
            ],
            'token' => $token['id']

        ]);

        $stripeCustomer = $stripe->customers->create([
            'email' => $user->email,
            'name' => $user->name,
            'phone' => $user->phone,
            'preferred_locales' => ['fr' ],
            'source' => $source['id'],
            'metadata' => [
                'user_id' => $user->id
            ],

        ]);

        $charge = $stripe->charges->create([
            'amount' => 1000,
            'currency'=> "eur",
            'receipt_email' => "info@01car.fr",
            'customer' => $stripeCustomer['id'],
            'source' =>  $source['id']
        ]);



        //$data['secret'] =  $intent->client_secret;

        return response()->json($charge);

        return response()->json($orders);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $getInfo = Socialite::driver($provider)->user();
        $user = $this->createUser($getInfo,$provider);

        auth()->login($user);
        return redirect()->to('/home');


        ///$user = Socialite::driver('github')->user();

        // $user->token;

    }

    function createUser($getInfo,$provider){

        $user = User::where('provider_id', $getInfo->id)->first();
        if (!$user) {
            $user = User::create([
                'name'     => $getInfo->name,
                'email'    => $getInfo->email,
                'password' => $provider,
            ]);

            $socialAccount = SocialAccount::create([
                'user_id'     => $getInfo->name,
                'provider_user_id'    => $getInfo->email,
                'provider' => $provider,
            ]);
        }
        return $user;
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirect($provider)
    {
        $url = Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();
        return response()->json(['provider' => $provider,
            'url' => $url
            ],
            200);
    }

    public function callback($provider)
    {
        $getInfo = Socialite::driver($provider)->stateless()->user();
        $user = $this->createUser($getInfo,$provider);

        auth()->login($user);


        $user = Auth::user();

        $user = User::find($user->id);
        $answer['token'] = $user->createToken('MyApp')->accessToken;
        $answer['user'] = new UserResource($user);

        $url = env('01CAR_FRONT_LOGIN_CALLBACK')  . "?token=" . $answer['token'];
        return response()->redirectTo($url);
    }

    function createUser($getInfo,$provider){
        $user = User::where('email', $getInfo->email)->first();

        if (!$user) {
            $user = User::create([
                'name' => $getInfo->name,
                'email' => $getInfo->email,
                'password' => bcrypt(Str::random(20)),
            ]);
        }

        $socialAccount = SocialAccount::with('user')
            ->where('user_id', $user->id)
            ->where('provider', $provider)
            ->where('provider_user_id', $getInfo->id)->first();

        if (!$socialAccount) {
            $socialAccount = SocialAccount::create([
                'user_id'           => $user->id,
                'provider_user_id'  => $getInfo->id,
                'provider'          => bcrypt($provider)
            ]);
        }
        return $user;
    }
}

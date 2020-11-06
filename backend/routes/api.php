<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/auth/login', 'App\Http\Controllers\Auth\LoginController@login');
Route::post('/auth/register', 'App\Http\Controllers\Auth\LoginController@register');
Route::get('/auth/redirect/{provider}', 'App\Http\Controllers\Auth\SocialController@redirect');
Route::get('/auth/callback/{provider}', 'App\Http\Controllers\Auth\SocialController@callback');

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

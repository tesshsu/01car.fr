<?php

use App\Http\Controllers\ProfilController;
use App\Http\Controllers\UserController;
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

// public routes
//Route::apiResource('/v1/adds', 'ProductController');

// Protected routes
Route::group(['middleware' => ['auth:api']], function () {

    Route::middleware('auth:api')->get('/v1/profil/{id}', 'App\Http\Controllers\ProfilController@show');
    Route::middleware('auth:api')->patch('/v1/profil/{id}', 'App\Http\Controllers\ProfilController@update');

//    Route::post('/v1/adds/{id}/files', 'ProductController@addFiles')->middleware('auth:api');
});


//  Admin routes
Route::group(['middleware' => ['auth:api', 'api.admin']], function () {
    // Users routes
    Route::apiResource('/v1/users', UserController::class);
});


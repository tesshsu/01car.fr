<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\FavoriteController;
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


Route::post('/auth/login', [LoginController::class, 'login'])->name('login');
Route::post('/auth/logout', [LoginController::class, 'logout'])->name('logout');

Route::post('/auth/register', [RegisterController::class, 'register'])->name('register');

// Password
Route::post('/password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
//Route::get('/password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('/password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset');
//Route::get('/password/reset/{token}', ' App\Http\Controllers\Auth\ResetPasswordController@showResetForm');

// socialite
Route::get('/auth/redirect/{provider}', [SocialController::class, 'redirect'])->name('social.login');
Route::get('/auth/callback/{provider}', [SocialController::class, 'callback'])->name('social.callback');


// public routes
Route::get('/v1/cars/search', [CarController::class, 'index'])->name('car.list');
Route::get('/v1/cars/{id}', [CarController::class, 'show'])->name('car.show');


// Protected routes
Route::group(['middleware' => ['auth:api']], function () {

    Route::get('/v1/profil', [ProfilController::class,'show'])->name('profil.show');
    Route::patch('/v1/profil', [ProfilController::class,'update'])->name('profil.update');

    Route::apiResource('/v1/cars', CarController::class);
    Route::post('/v1/cars/{car_id}/uploads', [CarController::class,'addFiles'])->name('car.addFiles');
    Route::delete('/v1/cars/{car_id}/uploads/{id}', [CarController::class,'removeFiles'])->name('car.removeFiles');

    Route::apiResource('/v1/favorites', FavoriteController::class);
});


//  Admin routes
Route::group(['middleware' => ['auth:api', 'api.admin']], function () {
    // Users routes
    Route::apiResource('/v1/users', UserController::class);
});


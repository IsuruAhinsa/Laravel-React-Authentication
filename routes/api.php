<?php

use App\Http\Controllers\API\Auth\EmailVerificationController;
use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\Auth\ResetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
 * Authentication Routes
 */

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::controller(ResetPasswordController::class)
    ->prefix('/password')
    ->name('password.')
    ->group(function () {
    Route::post('/forgot-password', 'forgotPassword')->name('email');
    Route::post('/reset-password', 'resetPassword')->name('update');
});
Route::controller(EmailVerificationController::class)
    ->middleware('throttle:6,1')
    ->prefix('/email')
    ->name('verification.')
    ->group(function () {
    Route::get('/verify/{id}/{hash}', 'verificationHandler')
        ->middleware('auth:api')
        ->name('verify');
    Route::post('/verification-notification', 'resend')
        ->middleware('auth:api')
        ->name('send');
});
Route::middleware('auth:api')->group(function () {
    Route::get('/logout', [LoginController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return response($request->user());
    });
});

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/join', function () {
    return view('join');
})->name('join');

Route::get( '/{any}', function () {
    return view('welcome');
})->where('any', '.*')->middleware('auth');

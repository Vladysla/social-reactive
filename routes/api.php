<?php

use Illuminate\Http\Request;
// Auth Routes
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// Get User Info
Route::get('/getUserInfo', 'HomeController@getUserInfo');

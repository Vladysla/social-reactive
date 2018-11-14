<?php

// Auth Routes
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// Get User Info
Route::get('/getUserInfo', 'HomeController@getUserInfo');
Route::get('/getProfileInfo/{user}', 'HomeController@getProfileInfo');

// Store post
Route::post('/createPost', 'HomeController@storePost');

// Get post by username
Route::get('/getPosts/{user?}', 'HomeController@getPosts');

// Get Likes
Route::get('/getLikes/{post}', 'HomeController@getPostLikes');

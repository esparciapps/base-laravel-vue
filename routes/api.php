<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->group(function() {
    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    Route::get('/logout', 'Auth\LoginController@logout');

    Route::get('/ping', function () {
        return 'pong';
    });
});

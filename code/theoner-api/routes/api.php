<?php

use Illuminate\Http\Request;

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

//CORS
env('FRONT_END_HOST');
header('Access-Control-Allow-Origin: '.env('FRONT_END_HOST'));
header('Access-Control-Allow-Credentials: true');

Route::group(['middleware' => ['auth:api']], function () {
    //Articles
    Route::post('/article','ArticleController@store');

    Route::post('/article/{id}/delete','ArticleController@destroy');
    Route::delete('/article/{id}','ArticleController@destroy');

    Route::post('/article/{id}','ArticleController@update');
    Route::put('/article/{id}','ArticleController@update');
    
    //Images
    Route::post('/image/{id}/delete','ImageController@destroy');
    Route::delete('/image/{id}','ImageController@destroy');
});

//Route::post('/user','UserController@store');
Route::post('/image','ImageController@store');
Route::get('/article','ArticleController@index');
Route::get('/image','ImageController@index');
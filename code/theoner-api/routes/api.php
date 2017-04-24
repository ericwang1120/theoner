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
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Credentials: true');

Route::post('/authenticate','AuthenticateController@authenticate');
Route::post('/user','UserController@store');

Route::resource('article', 'ArticleController');

Route::post('/image','ImageController@store');
Route::delete('/image/{id}','ArticleImageController@destroy');
Route::put('/image/{id}','ArticleImageController@update');
Route::get('/article/{articleId}/image','ArticleImageController@index');

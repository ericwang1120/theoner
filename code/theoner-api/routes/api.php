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

Route::post('/authenticate','AuthenticateController@authenticate');
Route::post('/user','UserController@store');

Route::resource('article', 'ArticleController');

Route::post('/article/{articleId}/image','ArticleImageController@store');
Route::delete('/image/{id}','ArticleImageController@destroy');
Route::put('/image/{id}','ArticleImageController@update');
Route::get('/article/{articleId}/image','ArticleImageController@index');

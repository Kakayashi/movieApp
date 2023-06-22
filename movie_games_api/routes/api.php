<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//API


//USER ENDPOINTS
Route::group(['middleware' => 'api', 'prefix' => 'auth', 'namespace' => 'App\Http\Controllers'], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

//GENRES ENDPOINTS
Route::group(['prefix' => 'genre', 'namespace' => 'App\Http\Controllers'], function() {
    Route::get('/','GenreController@index');
});


//MOVIES ENDPOINTS
Route::group(['prefix' => 'movie', 'namespace' => 'App\Http\Controllers'], function() {
    Route::get('/','MovieController@index');
    Route::get('/{movie}','MovieController@show');
    Route::get('/image/{filename}','MovieController@getImage');
}); 

//NOTES ENDPOINTS
Route::group(['prefix' => 'note', 'namespace' => 'App\Http\Controllers'], function() {
    Route::post('/add','NoteController@store')->middleware('auth.role:user');
    Route::delete('/delete/{note}','NoteController@destroy')->middleware('auth.role:admin');
    Route::put('update/{note}','NoteController@update');
    Route::get('/{note}','NoteController@show');
});


//FILES EXPORT

Route::group(['prefix' => 'export', 'namespace' => 'App\Http\Controllers'], function() {
    Route::get('/json','ExportController@exportToJson')->middleware('auth.role:admin');
    Route::get('/xml','ExportController@exportToXML')->middleware('auth.role:admin');
});


//FILES IMPORT
Route::group(['prefix' => 'import', 'namespace' => 'App\Http\Controllers'], function() {
    Route::post('/json','ImportController@fromJson')->middleware('auth.role:admin');
    Route::post('/xml','ImportController@fromXml')->middleware('auth.role:admin');
});


//USER ENDPOINTS
Route::group(['middleware' => 'api', 'prefix' => 'user', 'namespace' => 'App\Http\Controllers'], function(){
    Route::get('/','UserController@index');
    Route::put('/update/{user}','UserController@update');
});


//GAMES ENDPOINTS
Route::group([ 'prefix' => 'game', 'namespace' => 'App\Http\Controllers'], function(){
    Route::get('/','GameController@index');
});


//ISOLATION TEST 
Route::group([ 'prefix' => 'isolation', 'namespace' => 'App\Http\Controllers'], function(){
    Route::get('/repeatale','IsolationController@repeatale');
    Route::get('/committed','IsolationController@committed');
    Route::get('/uncommitted','IsolationController@uncommitted');
});

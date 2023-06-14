<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});


use App\Http\Controllers\GenreController;
use App\Http\Controllers\MovieController;


Route::get('/get-genres', [GenreController::class, 'getDataFromApi']);
Route::get('/get-movies', [MovieController::class, 'getMovies']);
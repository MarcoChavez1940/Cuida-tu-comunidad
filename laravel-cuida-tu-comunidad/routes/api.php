<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/states', 'App\Http\Controllers\StateController@index');
Route::post('/states', 'App\Http\Controllers\StateController@store');
Route::get('/states/{state}', 'App\Http\Controllers\StateController@show');
Route::put('/states/{state}', 'App\Http\Controllers\StateController@update');
Route::delete('/states/{state}', 'App\Http\Controllers\StateController@destroy');


Route::get('/tasks', 'App\Http\Controllers\TaskController@index');
Route::post('/tasks', 'App\Http\Controllers\TaskController@store');
Route::get('/tasks/{task}', 'App\Http\Controllers\TaskController@show');
Route::put('/tasks/{task}', 'App\Http\Controllers\TaskController@update');
Route::delete('/tasks/{task}', 'App\Http\Controllers\TaskController@destroy');

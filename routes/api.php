<?php

use App\Http\Controllers\Api\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/listprojects',[ProjectController::class,'index']);
Route::get('/listprojects/{id}',function(){
    return 'Obteniendo un projects';
});
Route::post('/listprojects',function(){
    return 'Creando un proyecto';
});
Route::put('/listprojects/{id}',function(){
    return 'Actualizando un proyecto';
});
Route::delete('/listprojects/{id}',function(){
    return 'Eliminando un proyecto ';
});


Route::get('/calendars',function(){
    return 'calendario';
});

Route::get('/listcomunidades',function(){
    return 'listadocomunidades';
});


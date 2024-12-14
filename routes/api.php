<?php

use App\Http\Controllers\Api\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/listprojects',[ProjectController::class,'index']);
// Route::get('/listproject/{id}',[ProjectController::class,'show']);
// Route::post('/listprojects',[ProjectController::class,'store']);
// Route::put('/listprojects/{id}',[ProjectController::class,'update']);
// Route::patch('/listprojects/{id}',[ProjectController::class,'updatePartial']);
// Route::delete('/listproject/{id}',[ProjectController::class,'destroy']);

Route::resource('listprojects', ProjectController::class)
    // ->middleware(['auth'])
    ->names('projects');


Route::patch('listprojects/{id}/partial', [ProjectController::class, 'updatePartial'])
    ->name('projects.partial');
    // ->middleware(['auth']);

Route::get('/calendars',function(){
    return 'calendario';
});

Route::get('/listcomunidades',function(){
    return 'listadocomunidades';
});


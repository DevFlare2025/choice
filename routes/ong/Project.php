<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;


Route::get('/projects',[ProjectController::class,'index'])->name('projects');

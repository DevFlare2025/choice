<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommunityController;



Route::get('/comunidades',[CommunityController::class,'index'])->name('community');

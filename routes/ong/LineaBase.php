<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LineaBaseController;

Route::get('/lineabase',[LineaBaseController::class,'index'])->name('LineaBase');

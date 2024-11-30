<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalendarController;

Route::get('/calendario',[CalendarController::class,'index']);

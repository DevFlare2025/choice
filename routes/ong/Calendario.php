<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalendarController;



Route::get('/calendars',[CalendarController::class,'index'])->name('calendars');

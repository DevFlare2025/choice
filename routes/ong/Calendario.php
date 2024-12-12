<?php
use App\Http\Controllers\CalendarController;
use Illuminate\Support\Facades\Route;

Route::get('/calendars',[CalendarController::class,'index']);

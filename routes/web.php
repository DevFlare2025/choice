<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Cargar rutas específicas desde otros archivos
require_once __DIR__.'/ong/Project.php';
require_once __DIR__.'/ong/Calendario.php';

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
    ]);
});

Route::get('/CobanChoice.com', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('register')
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', function () {
    return Inertia('Home');
});

require __DIR__.'/auth.php';

require_once __DIR__.'/ong/Project.php';
require_once __DIR__.'/ong/Calendario.php';
require_once __DIR__.'/ong/Community.php';





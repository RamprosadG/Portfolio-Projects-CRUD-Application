<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Hello World';
});

Route::prefix('project')->group(function () {
    Route::post('/create', [ProjectController::class, 'store']);
    Route::get('/get', [ProjectController::class, 'index']);
    Route::put('/update/{id}', [ProjectController::class, 'update']);
    Route::delete('/delete/{id}', [ProjectController::class, 'destroy']);
});

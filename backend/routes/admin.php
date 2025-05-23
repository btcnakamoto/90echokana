<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin API Routes
|--------------------------------------------------------------------------
|
| Here are all the admin API routes
|
*/

Route::prefix('admin')->group(function () {
    // Admin login
    Route::post('/login', [App\Http\Controllers\Admin\AdminAuthController::class, 'login']);
    
    // Routes that require admin authentication
    Route::middleware('auth:sanctum')->group(function () {
        // Admin profile
        Route::get('/me', [App\Http\Controllers\Admin\AdminAuthController::class, 'me']);
        Route::post('/logout', [App\Http\Controllers\Admin\AdminAuthController::class, 'logout']);
        
        // User management
        Route::apiResource('/users', App\Http\Controllers\Admin\UserManagementController::class);
        
        // Content management
        Route::apiResource('/learning-materials', App\Http\Controllers\Admin\ContentController::class);
        
        // Statistics
        Route::get('/statistics/users', [App\Http\Controllers\Admin\StatisticsController::class, 'users']);
        Route::get('/statistics/learning', [App\Http\Controllers\Admin\StatisticsController::class, 'learning']);
        
        // Community management
        Route::apiResource('/posts', App\Http\Controllers\Admin\CommunityModerationController::class);
        
        // System settings
        Route::get('/settings', [App\Http\Controllers\Admin\SettingsController::class, 'index']);
        Route::put('/settings', [App\Http\Controllers\Admin\SettingsController::class, 'update']);
    });
}); 

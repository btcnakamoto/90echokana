<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\LearningMaterialController;
use App\Http\Controllers\API\LearningStageController;
use App\Http\Controllers\API\LearningPlanController;
use App\Http\Controllers\API\ProgressController;
use App\Http\Controllers\API\VocabularyController;
use App\Http\Controllers\API\SpeakingExerciseController;
use App\Http\Controllers\API\ListeningExerciseController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 公开路由
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// 认证路由
Route::middleware('auth:sanctum')->group(function () {
    // 用户相关
    Route::get('/user', [UserController::class, 'show']);
    Route::put('/user', [UserController::class, 'update']);
    Route::post('/logout', [UserController::class, 'logout']);
    
    // 学习计划
    Route::apiResource('/learning-plans', LearningPlanController::class);
    
    // 学习内容
    Route::apiResource('/learning-stages', LearningStageController::class)->only(['index', 'show']);
    Route::apiResource('/learning-materials', LearningMaterialController::class)->only(['index', 'show']);
    Route::apiResource('/vocabularies', VocabularyController::class)->only(['index', 'show']);
    Route::apiResource('/speaking-exercises', SpeakingExerciseController::class)->only(['index', 'show']);
    Route::apiResource('/listening-exercises', ListeningExerciseController::class)->only(['index', 'show']);
    
    // 学习进度
    Route::apiResource('/progress', ProgressController::class);
    Route::get('/daily-progress', [ProgressController::class, 'daily']);
    Route::get('/weekly-progress', [ProgressController::class, 'weekly']);
    
    // 社区
    Route::apiResource('/posts', PostController::class);
    Route::apiResource('/posts/{post}/comments', CommentController::class);
    
    // 学习材料评论
    Route::apiResource('/learning-materials/{learning_material}/comments', CommentController::class);
});

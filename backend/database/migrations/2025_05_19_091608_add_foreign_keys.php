<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 添加 learning_materials 表的外键
        Schema::table('learning_materials', function (Blueprint $table) {
            $table->foreign('learning_stage_id')->references('id')->on('learning_stages')->onDelete('set null');
        });

        // 添加 progress 表的外键
        Schema::table('progress', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('learning_material_id')->references('id')->on('learning_materials')->onDelete('cascade');
        });

        // 添加 learning_plans 表的外键
        Schema::table('learning_plans', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        // 添加 posts 表的外键
        Schema::table('posts', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        // 添加 comments 表的外键
        Schema::table('comments', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('parent_id')->references('id')->on('comments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // 移除 learning_materials 表的外键
        Schema::table('learning_materials', function (Blueprint $table) {
            $table->dropForeign(['learning_stage_id']);
        });

        // 移除 progress 表的外键
        Schema::table('progress', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['learning_material_id']);
        });

        // 移除 learning_plans 表的外键
        Schema::table('learning_plans', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });

        // 移除 posts 表的外键
        Schema::table('posts', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });

        // 移除 comments 表的外键
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['parent_id']);
        });
    }
};

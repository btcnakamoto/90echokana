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
        Schema::create('learning_materials', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('type'); // video, audio, text, etc.
            $table->text('content');
            $table->string('media_url')->nullable();
            $table->integer('day'); // Day 1-90
            $table->unsignedBigInteger('learning_stage_id')->nullable(); // 移除外键约束
            $table->integer('difficulty_level')->default(1); // 1-5
            $table->json('tags')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('learning_materials');
    }
};

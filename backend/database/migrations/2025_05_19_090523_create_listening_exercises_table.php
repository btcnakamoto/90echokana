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
        Schema::create('listening_exercises', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('audio_url');
            $table->integer('duration_seconds');
            $table->text('transcript');
            $table->text('transcript_translation')->nullable();
            $table->string('scenario_type'); // daily conversation, news, etc.
            $table->integer('day');
            $table->integer('difficulty_level')->default(1);
            $table->json('vocabulary_words')->nullable();
            $table->json('comprehension_questions')->nullable();
            $table->boolean('has_subtitles')->default(true);
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
        Schema::dropIfExists('listening_exercises');
    }
};

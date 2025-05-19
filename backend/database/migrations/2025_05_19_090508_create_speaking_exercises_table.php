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
        Schema::create('speaking_exercises', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('scenario_type'); // daily conversation, business, etc.
            $table->text('prompt');
            $table->text('model_answer')->nullable();
            $table->string('audio_url')->nullable();
            $table->integer('day');
            $table->integer('difficulty_level')->default(1);
            $table->json('expected_grammar_points')->nullable();
            $table->json('expected_vocabulary')->nullable();
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
        Schema::dropIfExists('speaking_exercises');
    }
};

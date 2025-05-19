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
        Schema::create('vocabularies', function (Blueprint $table) {
            $table->id();
            $table->string('japanese_word');
            $table->text('reading')->nullable(); // hiragana/katakana reading
            $table->text('meaning');
            $table->text('example_sentence')->nullable();
            $table->text('example_translation')->nullable();
            $table->string('part_of_speech')->nullable();
            $table->string('jlpt_level')->nullable();
            $table->integer('day')->nullable(); // Which day it is introduced
            $table->string('audio_url')->nullable();
            $table->string('image_url')->nullable();
            $table->integer('difficulty')->default(1); // 1-5
            $table->json('tags')->nullable();
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
        Schema::dropIfExists('vocabularies');
    }
};

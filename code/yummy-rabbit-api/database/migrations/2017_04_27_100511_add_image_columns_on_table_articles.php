<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddImageColumnsOnTableArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('articles', function (Blueprint $table) {
            $table->string('image_path_left');
            $table->string('image_path_right');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn(['image_path_left','image_path_right']);
        });
    }
}

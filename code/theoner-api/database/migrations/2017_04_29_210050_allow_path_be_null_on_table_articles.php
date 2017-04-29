<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AllowPathBeNullOnTableArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //allow path to be null
        Schema::table('articles', function (Blueprint $table) {
            $table->string('image_path_left')->nullable()->change();
            $table->string('image_path_right')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //roll back
        Schema::table('articles', function (Blueprint $table) {
            $table->string('image_path_left')->nullable(false)->change();
            $table->string('image_path_right')->nullable(false)->change();
        });
    }
}

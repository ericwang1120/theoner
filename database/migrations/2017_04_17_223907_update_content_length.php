<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateContentLength extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Change the length of article content
        Schema::table('articles', function (Blueprint $table) {
            $table->string('content',2000)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //return back to default
        Schema::table('articles', function (Blueprint $table) {
            $table->string('content',191)->change();
        });
    }
}

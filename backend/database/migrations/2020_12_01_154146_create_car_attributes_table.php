<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarAttributesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_attributes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('car_id')->unsigned();

            $table->string('category', 32)->nullable();
            $table->string('name', 64)->nullable();
        });

        Schema::table('car_attributes', function(Blueprint $table) {
            $table->foreign('car_id')->references('id')->on('cars')
                ->onDelete('cascade')
                ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('car_attributes', function(Blueprint $table) {
            $table->dropForeign('car_attributes_car_id_foreign');
        });

        Schema::dropIfExists('car_attributes');
    }
}

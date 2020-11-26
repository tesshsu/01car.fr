<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned();

            $table->string('brand', 32)->nullable();
            $table->string('model', 32)->nullable();
            $table->string('generation', 8)->nullable();
            $table->integer('phase')->nullable();
            $table->integer('id_carBody')->nullable();
            $table->string('fuel', 8)->nullable();
            $table->string('transmission', 16)->nullable();

            $table->string('carBody', 32)->nullable();
            $table->integer('doors')->nullable();
            $table->string('finition', 32)->nullable();
            $table->string('displacement', 16)->nullable();
            $table->integer('power')->nullable();
            $table->string('version', 32)->nullable();
            $table->integer('km')->nullable();

            $table->timestamp('dt_entry_service', 0)->nullable();
            $table->timestamp('dt_valuation', 0)->nullable();

            $table->double('scoreRecognition', 5, 2)->nullable();
            $table->double('scoreValuation', 5, 2)->nullable();

            $table->double('price', 15, 2)->nullable();
            $table->string('currency', 4)->nullable();
            $table->boolean('prenium')->default(false);
        });

        Schema::table('cars', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('restrict')
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
        Schema::table('cars', function(Blueprint $table) {
            $table->dropForeign('cars_user_id_foreign');
        });

        Schema::dropIfExists('cars');
    }
}
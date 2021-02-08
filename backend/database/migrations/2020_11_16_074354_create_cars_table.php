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
            $table->timestamp('expire_at',)->nullable();
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
            $table->string('finishing', 32)->nullable();
            $table->string('displacement', 16)->nullable();
            $table->integer('power')->nullable();
            $table->string('version', 32)->nullable();
            $table->integer('km')->nullable();

            $table->timestamp('dt_entry_service', 0)->nullable();
            $table->timestamp('dt_valuation', 0)->nullable();

            $table->double('score_recognition', 5, 2)->nullable();
            $table->double('score_valuation', 5, 2)->nullable();

            $table->integer('confidence_note')->nullable();

            $table->double('estimate_price_min', 15, 2)->nullable();
            $table->double('estimate_price_max', 15, 2)->nullable();
            $table->double('price', 15, 2)->nullable();
            $table->string('currency', 4)->nullable();

            $table->string('license_plate', 16)->nullable();

            $table->boolean('premium')->default(false);
            $table->string('owner_type', 8)->nullable();

            $table->string('available', 12)->nullable();

            $table->boolean('smoking')->nullable()->default(false);
            $table->boolean('duplicate_keys')->nullable()->default(false);
            $table->string('sale_reason', 16)->nullable();
            $table->integer('hand_number')->nullable();
            $table->string('state', 12)->nullable();
            $table->string('country', 2)->nullable();
            $table->string('postal_code', 5)->nullable();


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

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarPremiumOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_premium_options', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('car_id')->unsigned();

            $table->boolean('under_warranty')->default(false);
            $table->boolean('accident')->default(false);
            $table->boolean('defects')->default(false);
            $table->boolean('km_certificate')->default(false);
            $table->boolean('technical_check_ok')->default(false);
            $table->boolean('periodic_maintenance')->default(false);
            $table->boolean('next_maintenance_under_5000km')->default(false);
            $table->boolean('purchase_invoice')->default(false);
            $table->boolean('gray_card')->default(false);
            $table->boolean('maintenance_log')->default(false);
        });
        Schema::table('car_premium_options', function(Blueprint $table) {
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
        Schema::table('car_premium_options', function(Blueprint $table) {
            $table->dropForeign('car_premium_options_car_id_foreign');
        });

        Schema::dropIfExists('car_premium_options');
    }
}

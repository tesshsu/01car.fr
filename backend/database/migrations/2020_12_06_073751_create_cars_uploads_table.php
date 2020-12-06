<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars_uploads', function (Blueprint $table) {
            $table->bigInteger('car_id')->unsigned();
            $table->bigInteger('upload_id')->unsigned();

            $table->primary(['car_id', 'upload_id']);
        });

        Schema::table('cars_uploads', function(Blueprint $table) {
            $table->foreign('car_id')->references('id')->on('cars')
                ->onDelete('cascade')
                ->onUpdate('restrict');
            $table->foreign('upload_id')->references('id')->on('uploads')
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
        Schema::table('cars_uploads', function(Blueprint $table) {
            $table->dropForeign('cars_uploads_car_id_foreign');
            $table->dropForeign('cars_uploads_upload_id_foreign');
        });


        Schema::dropIfExists('cars_uploads');
    }
}

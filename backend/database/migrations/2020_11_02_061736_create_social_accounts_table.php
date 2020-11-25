<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned();
            $table->string('provider_user_id');
            $table->string('provider');

            $table->primary(['user_id', 'provider']);
        });

        Schema::table('social_accounts', function(Blueprint $table) {
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
        Schema::table('social_accounts', function(Blueprint $table) {
            $table->dropForeign('social_accounts_user_id_foreign');
        });

        Schema::dropIfExists('social_accounts');
    }

}



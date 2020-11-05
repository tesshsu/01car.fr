<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles_permissions', function (Blueprint $table) {
            $table->bigInteger('role_id')->unsigned();
            $table->string('permission', 50);

            $table->primary(['role_id', 'permission']);
        });

        Schema::table('roles_permissions', function(Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles')
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
        Schema::table('roles_permissions', function(Blueprint $table) {
            $table->dropForeign('roles_permissions_role_id_foreign');
        });

        Schema::dropIfExists('roles_permissions');
    }
}

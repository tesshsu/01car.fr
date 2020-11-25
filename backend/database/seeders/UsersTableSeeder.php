<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->upsert([
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'name' => 'Admin',
            'email' => 'root@email.com',
            'email_verified_at' => now(),
            'password' => bcrypt('root'),
            'phone' => '11111111111 #33',
            'admin' => true
        ], 'email');

        DB::table('users')->upsert([
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'name' => 'customer',
            'email' => 'customer@email.com',
            'email_verified_at' => now(),
            'password' => bcrypt('customer'),
            'phone' => '222222222 #33',
            'admin' => false
        ], 'email');
    }
}

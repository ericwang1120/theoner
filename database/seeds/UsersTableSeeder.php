<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'name' => 'theoner',
            'email' => 'theoner@theoner.com',
            'password' => bcrypt('trueoner'),
        ]);
    }
}

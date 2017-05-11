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
        //create default user
	if(!DB::table('users')->where('id','1')->first()){
            DB::table('users')->insert(
		[
		'id'=>'1',
		'name' => 'yummy',
		'email' => 'yummy@rabbit.com',
		'password' => bcrypt('yummyrabbit'),
	    ]);
	}
    }
}

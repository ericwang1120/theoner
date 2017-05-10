<?php

use Illuminate\Database\Seeder;

class OAuthClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	$client1=[
		'id'=>'1',
		'name' => 'Laravel Personal Access Client',
		'secret' => '1sIX9uK5s6N3TbCyd3ZVWU96Sazkpdz564z9RzXP',
		'personal_access_client' => '1',
		'password_client' => '0',
		'redirect'=>'',
		'revoked' => '0',
	];

	$client2=[
		'id'=>'2',
		'name' => 'Laravel Password Grant Client',
		'secret' => '6rqnugxGilQcsHU6GtZC7KEJw1K2gsgxKyH3aqE2',
		'personal_access_client' => '0',
		'password_client' => '1',
		'redirect'=>'',
		'revoked' => '0',
	];

        //create oauth clients
	if(!DB::table('oauth_clients')->where('id','1')->first()){
		DB::table('oauth_clients')->insert($client1);
	}

	if(!DB::table('oauth_clients')->where('id','2')->first()){
		DB::table('oauth_clients')->insert($client2);
	}
    }
}

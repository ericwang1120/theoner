<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AuthenticateController extends Controller
{
    public function authenticate(Request $request)
    {
        $user = $request->json("data")[0];
        if(Auth::attempt(['name' => $user['username'], 'password' => $user['password']])){
            return Auth::user;
        }
        return 2;
        
    }
}
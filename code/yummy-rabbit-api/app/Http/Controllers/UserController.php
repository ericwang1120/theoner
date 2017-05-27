<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Store a user
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $user = $request->json("data")[0];
        return User::create([
        'name' => $user['username'],
        'email' => $user['email'],
        'password' => bcrypt($user['password'])
        ]);
    }
}
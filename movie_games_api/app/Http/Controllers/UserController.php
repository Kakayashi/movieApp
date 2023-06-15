<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth.role:admin');
    }


    public function update(UpdateUserRequest $request,User $user){
        $user->update($request->all());
    }
}

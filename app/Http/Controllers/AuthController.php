<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function index()
    {
        return view('join');
    }

    public function register(Request $request)
    {
        $rules = [
            'username' => 'required|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed'
        ];
        $validation = Validator::make($request->all(), $rules);
        if ($validation->fails()){
            return response()->json([
                'errors' => $validation->messages()
            ]);
        } else{
            $user = User::add([
                'username' => $request->username,
                'email' => $request->email
            ]);
            $user->generatePassword($request->password);
        }
    }

    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|email',
            'password' => 'required'
        ];
        $validation = Validator::make($request->all(), $rules);
        if ($validation->fails()){
            return response()->json([
                'errors' => $validation->messages()
            ]);
        } else{


        }
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}

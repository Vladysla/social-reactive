<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }

    public function getUserInfo()
    {
        if (Auth::check()){
            return response()->json([
                'user' => Auth::user()
            ]);
        }else{
            return response()->json([
                'error' => 'Not authorized'
            ]);
        }
    }
}

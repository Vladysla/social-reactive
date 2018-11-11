<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Auth;
use Illuminate\Http\Request;
use Validator;

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

    public function storePost(Request $request, Post $post)
    {
        $rules = [
            'body' => 'required|min:20'
        ];
        $validation = Validator::make($request->all(), $rules);
        if ($validation->fails()){
            return response()->json([
                'errors' => $validation->messages()
            ]);
        } else {
            $createdPost = Auth::user()->posts()->create([
                'title' => $request->title,
                'body' => $request->body
            ]);
            return response()->json([
                'post' => $post->with('user')->find($createdPost->id)
            ]);
        }
    }

    public function getPosts(User $user)
    {
        if($user->exists){
            $posts = $user->posts()->with('user')->orderBy('created_at', 'desc')->paginate(10);
            return response()->json($posts);
        } else {
            $posts = Auth::user()->posts()->with('user')->orderBy('created_at', 'desc')->paginate(1);
            return response()->json($posts);
        }
    }
}

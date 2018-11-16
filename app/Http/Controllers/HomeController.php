<?php

namespace App\Http\Controllers;

use App\Like;
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
        return response()->json([
            'user' => Auth::user()
        ]);
    }

    public function getProfileInfo(User $user)
    {
        if ($user->exists){
            return response()->json([
                'profile' => $user
            ]);
        } else {
            return response()->json([
                'error' => 'User not found'
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
            $posts = $user->posts()->with('user')->with('likes')->orderBy('created_at', 'desc')->paginate(10);

            return response()->json($posts);
        } else {
            $posts = Auth::user()->posts()->with('user')->with('likes')->orderBy('created_at', 'desc')->paginate(3);
            return response()->json($posts);
        }
    }

    public function likePost($post_id)
    {
        $like = new Like();
        $result = $like->like([
            'post_id' => $post_id,
            'user_id' => Auth::id()
        ]);

        return response()->json([
            'result' => $result
        ]);
    }

    public function unlikePost($post_id)
    {
        $like = new Like();
        $result = $like->unlike($post_id);

        return response()->json([
            'result' => $result
        ]);
    }

    public function getPostLikes(Post $post)
    {
        return response()->json([
            'likes' => $post->likes->count()
        ]);
    }
}

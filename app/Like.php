<?php

namespace App;

use Auth;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = 'likes';

    protected $fillable = [
        'post_id',
        'user_id'
    ];

    public function like($fields)
    {
        $findLike = Auth::user()->likes()->where('post_id', $fields['post_id'])->first();
        if($findLike)
            return false;

        $like = new static;
        $like->fill($fields);
        $like->save();

        return true;
    }

    public function unlike($post_id)
    {
        $like = Auth::user()->likes()->where('post_id', $post_id)->first();
        if ($like){
            $like->delete();
            return true;
        } else {
            return false;
        }
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}

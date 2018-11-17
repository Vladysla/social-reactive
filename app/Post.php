<?php

namespace App;

use Auth;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body'];

    protected $appends = ['liked_by_user'];

    public function getLikedByUserAttribute()
    {
        $userId = Auth::id();

        $like = $this->likes->first(function ($value) use ($userId) {
            return $value->user_id == $userId;
        });
        if ($like){
            return true;
        }

        return false;
    }

    public function getCreatedAtAttribute($value)
    {
        $now = Carbon::now();
        return $now->diffForHumans($value);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}

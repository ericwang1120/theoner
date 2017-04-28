<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'content',
        'type',
        'author',
        'image_path_left',
        'image_path_right'
    ];
}

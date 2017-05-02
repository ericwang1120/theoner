<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArticleImage extends Model
{
    protected $fillable = [
        'store_path',
        'display_type',
        'article_id',
    ];
}

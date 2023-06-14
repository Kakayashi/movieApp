<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'overview',
        'release_date',
        'vote_avarage',
        'image_path',
    ];


    public function genres(){
        return $this->belongsToMany(Genre::class);
    }

    public function notes() {
        return $this->hasMany(Note::class);
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    public $fillable = [
        'amount',
        'description',
        'movie_id'
    ];


    public function movie() {
        return $this->bleongsTo(Movie::class);
    }

    public function user() {
        return $this->bleongsTo(User::class);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MarcReichel\IGDBLaravel\Models\Game;

class IGDBController extends Controller
{

    public function getData(){

        $games = Game::with(['cover'])->get();
        // foreach($games as $game){
        //     echo $game['name'];
        // }
        return $games;
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MarcReichel\IGDBLaravel\Models\Game as IGDB;
use Illuminate\Support\Facades\Http;
use App\Models\Game;


class IGDBController extends Controller
{

    public function getData(){

        $games = IGDB::offset(1)->limit(500)->select(['name', 'rating','summary'])->with(['cover' => ['url', 'image_id']])->get();

        foreach($games as $gameData){
    
            if($gameData['name'] && $gameData['rating'] && $gameData['cover'] && $gameData['summary'] ){
                $game = new Game();
                $game->name = $gameData['name'];
                $game->rating = $gameData['rating'] / 10;
                $game->image = $gameData['cover']['url'];
                $game->summary = $gameData['summary'];
                $game->save();
            }

        }

        return "Success!";

    }

}

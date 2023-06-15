<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Movie;
use App\Models\Game;

class ImportController extends Controller
{
    public function fromJson(Request $request){

        $plikJson = $request->file('plik')->getContent();
        $dane = json_decode($plikJson, true);

        try{
            DB::beginTransaction();

            foreach($dane as $movieData){

                $movie = new Movie();
                $movie->title = $movieData['title'];
                $movie->overview = $movieData['overview'];
                $movie->adult = $movieData['adult'];
                $movie->release_date = $movieData['release_date'];
                $movie->vote_average = $movieData['vote_average'];
                $movie->vote_count = $movieData['vote_count'];
                $movie->image_path = $movieData['image_path'];
                $movie->save();
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }

    }

    public function fromXml(Request $request)
    {
        $xmlData = $request->file('plik')->getContent();
        $xml = simplexml_load_string($xmlData);
        
        $json = json_encode($xml);
        $phpArray = json_decode($json, true); 

        try{
            DB::beginTransaction();

            foreach ($phpArray['game'] as $gameData) {
                $game = new Game();

                $game->name = $gameData['name'];
                $game->summary = $gameData['summary'];
                $game->image = $gameData['image'];
                $game->rating = $gameData['rating'];

                $game->save();
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }

    }


}

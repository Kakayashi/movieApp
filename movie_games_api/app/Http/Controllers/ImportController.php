<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Movie;

class ImportController extends Controller
{
    public function json(Request $request){

        $plikJson = $request->file('plik')->getContent();
        $dane = json_decode($plikJson, true);

        try{
            DB::beginTransaction();

            foreach($dane as $el){
                $movie = new Movie();
                $movie->title = $movieData['title'];
                $movie->overview = $movieData['overview'];
                $movie->adult = $movieData['adult'];
                $movie->release_date = $movieData['release_date'];
                $movie->vote_average = $movieData['vote_average'];
                $movie->vote_count = $movieData['vote_count'];
                $movie->image_path = $movieData['poster_path'];
                $movie->save();
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }

        

    }
}

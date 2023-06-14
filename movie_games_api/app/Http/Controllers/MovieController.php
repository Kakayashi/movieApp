<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Http\Resources\MovieResource;
use App\Http\Resources\MovieCollection;
use App\Services\MovieQuery;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        
        $filter = new MovieQuery();
        $filterItems = $filter->transform($request);


        $genre = $request->query('genre') ?? null;
        $year = $request->query('year') ?? null;

        $movies = Movie::where($filterItems);
        
        if($genre != null){
            $movies = $movies->whereHas('genres', function($q) use ($genre){
                $q->where('name', '=', $genre);
            });

            if( $year != null){
                $movies->whereYear('release_date',$year);
            }
        }

        return new MovieCollection($movies->paginate(20));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMovieRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMovieRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return new MovieResource($movie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMovieRequest  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMovieRequest $request, Movie $movie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        //
    }


    public function getMovies() {

        for($i = 1; $i <= 5; $i++){

            $response = Http::get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=15237914842e160bf247366b6944f57e&page={$i}");
            $movies = $response->json()['results'];

            foreach($movies as $movieData){
                $movie = new Movie();

                $movie->id = $movieData['id'];
                $movie->title = $movieData['title'];
                $movie->overview = $movieData['overview'];
                $movie->adult = $movieData['adult'];
                $movie->release_date = $movieData['release_date'];
                $movie->vote_average = $movieData['vote_average'];
                $movie->vote_count = $movieData['vote_count'];
                $movie->image_path = $movieData['poster_path'];

                $url = "https://image.tmdb.org/t/p/w500" . $movieData['poster_path'];
                $image_name = basename($url);
                $path = "public/images/movies/" . $image_name;
                $image = file_get_contents($url);
                Storage::put($path, $image);

                $movie->save();

                $movie->genres()->attach($movieData['genre_ids']);            
            }
        }

        return "Success!";
    }


    public function getImage($filename){
        $path = 'public/images/movies/' . $filename;
        if (!Storage::exists($path)) {
            abort(404);
        }
        return response()->file(storage_path('app/' . $path));
    }

}

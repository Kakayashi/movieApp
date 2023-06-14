<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Movie;

class ExportController extends Controller
{
    public function exportToJson(){
        $data = Movie::all();

        $filename = 'movies.json';
        $filepath = storage_path($filename);

        file_put_contents($filepath, json_encode($data));

        return Response::download($filepath,$filename)->deleteFileAfterSend(true);


    }

    public function exportToXML(){
        $data = Movie::all();

        $xml = new \SimpleXMLElement('<data></data>');
        $filename = 'movies.xml';
        $filePath = storage_path($filename);

        foreach ($data as $movie) {
            
            $xmlItem = $xml->addChild('movie'); // Dodaj nowy element do XML
            
            $xmlItem->addChild('id', $movie->id);
            $xmlItem->addChild('title', htmlspecialchars($movie->title));
            $xmlItem->addChild('overview', htmlspecialchars($movie->overview));
            $xmlItem->addChild('adult', $movie->adult);
            $xmlItem->addChild('release_date', $movie->release_date);
            $xmlItem->addChild('vote_average', $movie->vote_average);
            $xmlItem->addChild('vote_count', $movie->vote_count);
            $xmlItem->addChild('image_path', $movie->image_path);

        }

        $xmlString = $xml->asXML();
        file_put_contents($filePath, $xmlString);
        return Response::download($filePath,$filename)->deleteFileAfterSend(true);

    }


}

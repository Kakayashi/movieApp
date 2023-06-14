<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'overview' => $this->overview,
            'adult' => $this->adult,
            'releaseDate' => $this->release_date,
            'voteAverage' => $this->vote_average,
            'voteCount' => $this->vote_count,
            'imagePath' => $this->image_path,
            'genres' => GenreResource::collection($this->genres),
            'notes' => NoteResource::collection($this->notes)
        ];
    }
}

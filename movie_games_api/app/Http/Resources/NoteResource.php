<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\Movie;

class NoteResource extends JsonResource
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
            'amount' => $this->amount,
            'description' => $this->description,
            'user_id' => $this->user_id,
            'user' => User::find($this->user_id)->name,
            'country_short' => User::find($this->user_id)->country_short,
            'movie_id' => $this->movie_id,
            'movie_title' => Movie::find($this->movie_id)->title];
    }
}

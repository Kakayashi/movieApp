<?php

namespace App\Services;

use Illuminate\Http\Request;


class MovieQuery {
    protected $safeParms = [
        'voteAverage'=> ['gte'],
    ];


    protected $columnMap = [
        'voteAverage' => 'vote_average'
    ];

    protected $operatorsMap = [
        'eq' => '=',
        'gte' => '>=',
    ];

    public function transform(Request $request) {
        $eloQuery = [];

        foreach($this->safeParms as $parm => $operators){
            $query = $request->query($parm);

            if(!isset($query)){
                continue;
            }

            $coulmn = $this->columnMap[$parm] ?? $parm;

            foreach($operators as $operator){
                if(isset($query[$operator])){
                    $eloQuery[] = [$coulmn, $this->operatorsMap[$operator], $query[$operator]];
                }
            }

        }

        return $eloQuery;
    }
}
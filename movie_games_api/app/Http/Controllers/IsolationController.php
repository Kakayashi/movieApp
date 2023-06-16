<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Game;
use Illuminate\Support\Facades\DB;


class IsolationController extends Controller
{
    public function repeatale() {

        $pdo = DB::connection('mysql2')->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL REPEATABLE READ');

        DB::beginTransaction('mysql2');

        echo Game::all()->count();

        echo "WAITING...";
        sleep(20);

        echo Game::all()->count();

        DB::commit('mysql2');


    }

    public function committed() {

        $pdo = DB::connection()->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');

        DB::beginTransaction();

        echo User::all();

        echo "WAITING...";
        sleep(20);

        echo User::all();

        DB::commit();


    }


    public function uncommitted() {

        $pdo = DB::connection()->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED');

        DB::beginTransaction("B");

        echo Game::all()->count();

        echo "WAITING...";
        sleep(20);

        echo Game::all()->count();

        DB::commit("B");


    }




}

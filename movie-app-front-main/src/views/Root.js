import React from "react";
import NavBar from "../components/organisms/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/organisms/Home";
import Ranking from "../components/organisms/Ranking";
import Movies from "../components/organisms/Movies";
import Login from "../components/organisms/Login";
import Register from "../components/organisms/Register";
import MoviesAll from "../components/organisms/MoviesAll";

function Root() {
	return (
		<BrowserRouter>
			<>
				<NavBar />

				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/ranking" exact element={<Ranking />} />
					<Route path="/moviesAll" exact element={<MoviesAll />} />
					<Route path="/movies/:movieID" exact element={<Movies />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/register" exact element={<Register />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default Root;

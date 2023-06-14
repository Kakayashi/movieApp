import React, { useState } from "react";
import Banner from "../atoms/banner/Banner";
import RankingFilters from "../molecules/rankingFilters/RankingFilters";
import MoviesFiltered from "../molecules/moviesFiltered/MoviesFiltered";

function MoviesAll() {
	const [rating, setRating] = useState("");
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState("");

	return (
		<>
			<Banner title={"Movies"} />
			<RankingFilters
				rating={rating}
				setRating={setRating}
				genre={genre}
				setGenre={setGenre}
				year={year}
				setYear={setYear}
			/>
			<MoviesFiltered rating={rating} genre={genre} year={year} />
		</>
	);
}

export default MoviesAll;

import { useState, useEffect } from "react";
import axios from "axios";

const useMovieSearch = (query) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/search/movie`,
					{
						params: {
							query: query,
							include_adult: false,
							language: "en-US",
							page: 1,
						},
						headers: {
							Accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
						},
					}
				);

				setMovies(response.data.results);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchMovies();
	}, [query]);

	return { movies, isLoading };
};

export default useMovieSearch;

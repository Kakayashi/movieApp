import { useEffect, useState } from "react";
import axios from "axios";

const useMovieCredits = (movieId) => {
	const [credits, setCredits] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovieCredits = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
					{
						headers: {
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
							Accept: "application/json",
						},
					}
				);

				setCredits(response.data.cast.slice(0, 25));
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching movie credits:", error);
				setIsLoading(false);
			}
		};

		fetchMovieCredits();
	}, [movieId]);

	return { credits, isLoading };
};

export default useMovieCredits;

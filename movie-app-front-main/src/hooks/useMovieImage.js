import { useEffect, useState } from "react";
import axios from "axios";

const useMovieImages = (movieId) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovieImages = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}/images`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
						},
					}
				);
				setImages(response.data.backdrops.slice(0, 25));
			} catch (error) {
				setError(error);
			}

			setIsLoading(false);
		};

		fetchMovieImages();
	}, [movieId]);

	return { images, isLoading, error };
};

export default useMovieImages;

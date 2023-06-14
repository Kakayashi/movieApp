import { useEffect, useState } from "react";
import axios from "axios";

const useMovieVideos = (movieId) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchMovieVideos = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
						},
					}
				);

				const videosData = response.data.results.filter(
					(video) => video.site === "YouTube"
				);
				const videosArray = videosData.map((video) => ({
					key: video.key,
					name: video.name,
				}));

				setVideos(videosArray);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchMovieVideos();
	}, [movieId]);

	return videos;
};

export default useMovieVideos;

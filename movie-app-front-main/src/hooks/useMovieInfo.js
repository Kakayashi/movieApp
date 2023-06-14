import React, { useState, useEffect } from "react";
import axios from "axios";

const useMovieInfo = ({ movieID }) => {
	const [movieInfo, setMovieInfo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const url =
		`https://api.themoviedb.org/3/movie/` + movieID.movieID + `?language=en-US`;
	console.log("url2", movieID.movieID);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const options = {
					method: "GET",
					url: url,
					headers: {
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
					},
				};

				const response = await axios.request(options);
				setMovieInfo(response.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { movieInfo, loading, error };
};

export default useMovieInfo;

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchGames = () => {
	const [games, setGames] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchGames = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const response = await axios.get("http://localhost:8000/api/game");

				setGames(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchGames();
	}, []);

	return { games, isLoading, error };
};

export default useFetchGames;

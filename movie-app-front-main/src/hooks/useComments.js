import { useEffect, useState } from "react";
import axios from "axios";

const useComments = (movieId) => {
	const [comments, setComments] = useState([]);
	const [isLoadingComments, setIsLoadingComments] = useState(false);

	useEffect(() => {
		const fetchComments = async () => {
			setIsLoadingComments(true);

			try {
				const response = await axios.get(
					`http://localhost:8000/api/movie/${movieId}`
				);
				setComments(response.data.data.notes);
				setIsLoadingComments(false);
			} catch (error) {
				console.log("Error fetching comments:", error);
				setIsLoadingComments(false);
			}
		};

		fetchComments();
	}, [movieId]);

	return { comments, isLoadingComments };
};

export default useComments;

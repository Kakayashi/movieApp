import { useState } from "react";

const useDeleteComment = () => {
	const [isLoading, setIsLoading] = useState(null);
	const [error, setError] = useState(null);

	const deleteComment = async (commentId, token) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`http://localhost:8000/api/note/delete/${commentId}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error("Failed to delete comment.");
			}

			// Komentarz został pomyślnie usunięty
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, deleteComment };
};

export default useDeleteComment;

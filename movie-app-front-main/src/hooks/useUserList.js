import React, { useState, useEffect } from "react";

const useUserList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchUsers = async (bearerToken) => {
		try {
			setIsLoading(true);
			const response = await fetch("http://localhost:8000/api/user", {
				headers: {
					Authorization: `Bearer ${bearerToken}`,
				},
			});

			if (!response.ok) {
				throw new Error(
					"Wystąpił błąd podczas pobierania danych użytkowników."
				);
			}

			const data = await response.json();
			console.log("data", data);
			setUsers(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return { users, isLoading, fetchUsers };
};

export default useUserList;

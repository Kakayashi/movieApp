import { useState, useEffect } from "react";
import axios from "axios";

const useCountryList = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCountries = async () => {
			// try {
			// } catch (error) {
			// 	console.error("Error fetching country list:", error);
			// }
		};

		fetchCountries();
	}, []);

	return { countries, isLoading };
};

export default useCountryList;

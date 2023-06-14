import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	ListWrapper,
	ListTitle,
	ListItem,
	ListItemInfo,
	ListItemInfoNumber,
	ListItemInfoTitle,
	ListItemInfoImage,
	ListItemBackground,
	ListItemRatigContainer,
	StyledStatr,
	Review,
} from "../rankingList/RankingList.style";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "./MoviesFiltered.style";

function MoviesFiltered({ rating, genre, year }) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleItemClick = (movie) => {
		navigate(`/movies/${movie.id}`);
	};

	useEffect(() => {
		const fetchMovies = async () => {
			setIsLoading(true);

			try {
				let url = "http://localhost:8000/api/movie?";
				if (genre) {
					url += `genre=${genre}&`;
				}
				if (rating) {
					url += `voteAverage[gte]=${rating}&`;
				}
				if (year) {
					url += `year=${year}`;
				}

				const response = await axios.get(url);
				setMovies(response.data.data);
				setIsLoading(false);
				console.log("url", url);
				console.log("Response", response);
			} catch (error) {
				console.error(error);
				setIsLoading(false);
			}
		};

		fetchMovies();
	}, []);

	const fetchMovies2 = async () => {
		setIsLoading(true);

		try {
			let url = "http://localhost:8000/api/movie?";
			if (genre) {
				url += `genre=${genre}&`;
			}
			if (rating) {
				url += `voteAverage[gte]=${rating}&`;
			}
			if (year) {
				url += `year=${year}`;
			}

			const response = await axios.get(url);
			setMovies(response.data.data);
			setIsLoading(false);
			console.log("url", url);
			console.log("Response", response);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <ListTitle>Loading...</ListTitle>;
	}
	let index = -1;
	const imgUrl = "https://image.tmdb.org/t/p/original/";

	return (
		<ListWrapper>
			<SearchButton onClick={fetchMovies2}>Search</SearchButton>
			{movies.map((item) => {
				index++;
				return (
					<ListItemBackground key={item.id + Math.random()} index={index}>
						<ListItem onClick={() => handleItemClick(item)}>
							<ListItemInfo>
								<ListItemInfoNumber>{index + 1 + "."}</ListItemInfoNumber>
								<ListItemInfoImage src={imgUrl + item.imagePath} />
								<ListItemInfoTitle>{item.title}</ListItemInfoTitle>
							</ListItemInfo>
							<ListItemRatigContainer>
								<StyledStatr size={24} />
								<Review reviewsnumber={item.voteCount}>
									{item.voteAverage.toFixed(1)}
								</Review>
							</ListItemRatigContainer>
						</ListItem>
					</ListItemBackground>
				);
			})}
		</ListWrapper>
	);
}

export default MoviesFiltered;

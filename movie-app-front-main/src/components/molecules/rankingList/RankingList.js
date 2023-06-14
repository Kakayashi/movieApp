import React, { useState, useEffect } from "react";
import useTrendingData from "../../../hooks/useTrendingData";
import { useNavigate } from "react-router-dom";
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
	ButtonWrapper,
} from "./RankingList.style";
import CustomButton from "../../atoms/button/CustomButton";
import axios from "axios";

function RankingList() {
	//const { trendingData, loading, error } = useTrendingData();
	const [selectedMovie, setSelectedMovie] = useState(null);
	const navigate = useNavigate();

	const [movies, setMovies] = useState([]);
	const [isMoviesLoading, setIsMoviesLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchMovies = async () => {
			setIsMoviesLoading(true);

			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIzNzkxNDg0MmUxNjBiZjI0NzM2NmI2OTQ0ZjU3ZSIsInN1YiI6IjY0ODA5ZDE0ZTI3MjYwMDE0N2I3ZjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwmEq98GzqDRYusEFAMIzSLprb_6U4KqIgbE3UZBIWg",
				},
			};

			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
					options
				);
				const newMovies = response.data.results;

				setMovies((prevMovies) => [...prevMovies, ...newMovies]);
				setIsMoviesLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchMovies();
	}, [page]);

	const loadNextPage = () => {
		console.log("load");
		setPage((prevPage) => prevPage + 1);
	};

	const handleItemClick = (movie) => {
		setSelectedMovie(movie);
		navigate(`/movies/${movie.id}`);
	};

	if (isMoviesLoading) {
		return <ListTitle>Loading...</ListTitle>;
	}

	console.log("movies", movies);
	const imgUrl = "https://image.tmdb.org/t/p/original/";
	let index = -1;

	return (
		<>
			<ListWrapper>
				<ListTitle>Top 100 movies</ListTitle>
				{isMoviesLoading && <ListTitle>Loading movies...</ListTitle>}
				{movies.map((item) => {
					index++;
					return (
						<ListItemBackground key={item.id + Math.random()} index={index}>
							<ListItem onClick={() => handleItemClick(item)}>
								<ListItemInfo>
									<ListItemInfoNumber>{index + 1 + "."}</ListItemInfoNumber>
									<ListItemInfoImage src={imgUrl + item.poster_path} />
									<ListItemInfoTitle>{item.title}</ListItemInfoTitle>
								</ListItemInfo>
								<ListItemRatigContainer>
									<StyledStatr size={24} />
									<Review reviewsnumber={item.vote_count}>
										{item.vote_average.toFixed(1)}
									</Review>
								</ListItemRatigContainer>
							</ListItem>
						</ListItemBackground>
					);
				})}
			</ListWrapper>
			<ButtonWrapper>
				<CustomButton func={loadNextPage} text={"Load more"} />
			</ButtonWrapper>
		</>
	);
}

export default RankingList;

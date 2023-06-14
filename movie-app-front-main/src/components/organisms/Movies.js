import React from "react";
import useMovieInfo from "../../hooks/useMovieInfo";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Banner from "../atoms/banner/Banner";
import MovieComponent from "../molecules/movieComponent/MovieComponent";

const Wrapper = styled.div`
	color: #fff;
	font-size: 32px;
	margin: 40px;
`;

const Movies = () => {
	const movieID = useParams();

	const { movieInfo, loading, error } = useMovieInfo({ movieID });

	return (
		<>
			<Banner title="Movie" />
			{loading ? (
				<Wrapper>Loading...</Wrapper>
			) : error ? (
				<Wrapper>Error occurred: {error.message}</Wrapper>
			) : (
				<MovieComponent movie={movieInfo} />
			)}
		</>
	);
};

export default Movies;

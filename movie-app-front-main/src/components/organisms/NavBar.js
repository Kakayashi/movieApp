import React, { useEffect, useState } from "react";
import getWindowSize from "../atoms/getWindowSize/getWinowSize";
import {
	Wrapper,
	Logo,
	StyledLink,
	StyledSearch,
	StyledSearchWrapper,
	WrapperItem,
	SearchResultWrapper,
	SearchResultItem,
	SmallPoster,
} from "./NavBar.style";
import { FaSearch } from "react-icons/fa";
import useMovieSearch from "../../hooks/useMovieSearch";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const [windowSize, setWindowSize] = useState(getWindowSize());
	const [search, setSearch] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const { movies, isLoading } = useMovieSearch(search);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const navigate = useNavigate();
	const accessToken = sessionStorage.getItem("token");
	const role = sessionStorage.getItem("role");

	const handleItemClick = (movie) => {
		console.log("movieClicked");
		setSelectedMovie(movie);
		navigate(`/movies/${movie.id}`);
	};

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSearchFocus = () => {
		setIsSearchFocused(true);
	};

	const handleSearchBlur = () => {
		setTimeout(() => {
			setIsSearchFocused(false);
		}, 1000);
	};

	const logoutUser = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("role");
		// Dodaj dodatkowe czynności związane z wylogowaniem użytkownika
		// np. przekierowanie na stronę logowania lub wyczyszczenie lokalnego stanu aplikacji

		// Przekierowanie na stronę logowania
		//window.location.href = "/login";
	};

	console.log({
		search,
		movies,
	});

	return (
		<>
			{windowSize.innerWidth <= 900 ? (
				<h2>Small menu</h2>
			) : (
				<Wrapper>
					<WrapperItem>
						<Logo>MovieApp</Logo>
						<StyledLink to="/">Home</StyledLink>
						<StyledLink to="/ranking">Top 100</StyledLink>
						<StyledLink to="/moviesAll">Movies</StyledLink>
						<StyledLink to="/games">Games</StyledLink>
						<StyledLink to="/movies&comments">Movies&Comments</StyledLink>
						<StyledSearchWrapper>
							<StyledSearch
								value={search}
								onChange={handleChange}
								onFocus={handleSearchFocus}
								onBlur={handleSearchBlur}
								placeholder="Search"
								hasFocus={isSearchFocused}
							></StyledSearch>
							<FaSearch />
							{isSearchFocused && (
								<SearchResultWrapper>
									{movies.map((movie) => {
										const posterUrl =
											"https://image.tmdb.org/t/p/original/" +
											movie.poster_path;
										return (
											<SearchResultItem onClick={() => handleItemClick(movie)}>
												<SmallPoster src={posterUrl} />
												{movie.original_title}
											</SearchResultItem>
										);
									})}
								</SearchResultWrapper>
							)}
						</StyledSearchWrapper>
					</WrapperItem>
					<WrapperItem>
						{role === "1" && (
							<StyledLink to="/dashboard"> Admin Dashboard</StyledLink>
						)}
						{accessToken ? (
							<StyledLink marginRight={true} onClick={logoutUser} to="/login">
								Logout
							</StyledLink>
						) : (
							<StyledLink marginRight={true} to="/login">
								Login
							</StyledLink>
						)}
					</WrapperItem>
				</Wrapper>
			)}
		</>
	);
}

export default NavBar;

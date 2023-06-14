import React from "react";
import Banner from "../atoms/banner/Banner";
import {
	DescriptionTitle,
	DescriptionWrapper,
	SplideWrapper,
	CarouselItem,
	CarouselImage,
} from "./Homse.style";
import useTrendingData from "../../hooks/useTrendingData";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

function Home() {
	const { trendingData, loading, error } = useTrendingData();
	const posterUrl = "https://image.tmdb.org/t/p/original";

	return (
		<>
			<Banner title={"Home"} />
			<DescriptionWrapper>
				<DescriptionTitle>
					What is a <span>movieApp</span>
				</DescriptionTitle>
				<p>
					MovieApp is an application that allows users to browse a database of
					movies and reviews, enabling them to rate as well as find information
					about the cast, and release dates. With MovieApp, users can discover
					new titles, read other users' opinions, and stay up-to-date with the
					latest news from the world of cinema.
				</p>
				<p>
					Karol Krawczyński - frontend <br />
					Karol Kowalik - backend
				</p>
			</DescriptionWrapper>
			<SplideWrapper>
				<Splide
					options={{
						rewind: true,
						gap: "20px",
						perPage: 3,
						perMove: 1,
						pagination: true,
						autoWidth: true,
						autoplay: true,
					}}
				>
					{!loading &&
						trendingData.results.map((item) => {
							if (item.media_type === "movie") {
								return (
									<SplideSlide>
										<CarouselItem>
											<CarouselImage src={posterUrl + item.poster_path} />
											{item.title}
										</CarouselItem>
									</SplideSlide>
								);
							}
						})}
				</Splide>
			</SplideWrapper>
		</>
	);
}

export default Home;

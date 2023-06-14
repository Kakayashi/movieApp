import React, { useState } from "react";
import {
	RankingFiltersWrapper,
	RankingFilterTitle,
	FiltersContainer,
} from "./RankingFilters.style";
import { CustomSwitch } from "../../atoms/switch/CustomSwitch";
import CustomSlider from "../../atoms/customSlider/CustomSlider";
import GenreSelect from "../../atoms/select/GenreSelect";
import YearSelect from "../../atoms/select/YearSelect";

function RankingFilters({ rating, setRating, genre, setGenre, year, setYear }) {
	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleGenreChange = (event) => {
		setGenre(event.target.value);
	};

	const handleYearChange = (event) => {
		setYear(event.target.value);
	};

	console.log({
		Rating: rating,
		genre: genre,
		year: year,
	});

	return (
		<RankingFiltersWrapper>
			<RankingFilterTitle>Filters</RankingFilterTitle>
			<FiltersContainer>
				<CustomSlider
					label={"Rating"}
					onSwitchChange={handleRatingChange}
					track={true}
				/>
				<GenreSelect onSwitchChange={handleGenreChange} val={genre} />
				<YearSelect onSwitchChange={handleYearChange} val={year} />
			</FiltersContainer>
		</RankingFiltersWrapper>
	);
}

export default RankingFilters;

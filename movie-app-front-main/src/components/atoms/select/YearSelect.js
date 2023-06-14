import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Ract, { useState } from "react";
import styled from "styled-components";

const SelectCustom = styled(Select)`
	&& {
		color: rgb(122, 96, 1); // Kolor tekstu
		&.Mui-focused {
			color: rgb(245, 197, 24) !important; // Kolor tekstu dla stanu aktywnego
		}
		&.MuiInputLabel-root {
			color: rgb(122, 96, 1) !important; // Kolor etykiety
			&.Mui-focused {
				color: rgb(
					245,
					197,
					24
				) !important; // Kolor etykiety dla stanu aktywnego
			}
		}
		&.MuiOutlinedInput-root {
			& .MuiOutlinedInput-notchedOutline {
				border-color: rgb(122, 96, 1); // Kolor bordera
			}
			&:hover .MuiOutlinedInput-notchedOutline {
				border-color: rgb(245, 197, 24); // Kolor bordera dla stanu hover
			}
			&.Mui-focused .MuiOutlinedInput-notchedOutline {
				border-color: rgb(245, 197, 24); // Kolor bordera dla stanu aktywnego
			}
		}
	}
`;

const SelectWrapper = styled.div`
	margin-top: -10px;
	width: 200px;
`;

const CustomInputLabel = styled(InputLabel)`
	&& {
		color: rgb(122, 96, 1);
		&.Mui-focused {
			color: rgb(245, 197, 24);
		}
	}
`;

const renderYearOptions = () => {
	const currentYear = new Date().getFullYear();
	const startYear = 1990;
	const yearOptions = [];

	for (let i = currentYear; i >= startYear; i--) {
		yearOptions.push(
			<MenuItem key={i} value={i}>
				{i}
			</MenuItem>
		);
	}

	return yearOptions;
};

function YearSelect({ onSwitchChange, val }) {
	const currentYear = new Date().getFullYear();
	const startYear = 1990;
	const yearOptions = [];

	for (let i = currentYear; i >= startYear; i--) {
		yearOptions.push(
			<MenuItem key={i} value={i}>
				{i}
			</MenuItem>
		);
	}

	return (
		<SelectWrapper>
			<FormControl fullWidth>
				<CustomInputLabel id="year-label2">Year</CustomInputLabel>
				<SelectCustom
					labelId="year-label"
					id="year"
					value={val}
					label="year"
					onChange={onSwitchChange}
				>
					<MenuItem value="" disabled>
						Select year
					</MenuItem>
					{renderYearOptions()}
				</SelectCustom>
			</FormControl>
		</SelectWrapper>
	);
}

export default YearSelect;

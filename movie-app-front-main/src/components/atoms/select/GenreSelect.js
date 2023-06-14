import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Ract, { useState } from "react";
// import { styled } from "@mui/system";
import styled from "styled-components";

const gold = ({ theme }) => theme.colors.gold;
const goldx2 = ({ theme }) => theme.colors.goldDisabled;
const black = ({ theme }) => theme.colors.gold;

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

function GenreSelect({ onSwitchChange, val }) {
	return (
		<SelectWrapper>
			<FormControl fullWidth>
				<CustomInputLabel id="genre-label2">genre</CustomInputLabel>
				<SelectCustom
					labelId="genre-label"
					id="genre"
					value={val}
					label="genre"
					onChange={onSwitchChange}
				>
					<MenuItem value="" disabled>
						Select genre
					</MenuItem>
					<MenuItem value="Action">Action</MenuItem>
					<MenuItem value="Adventure">Adventure</MenuItem>
					<MenuItem value="Animation">Animation</MenuItem>
					<MenuItem value="Biography">Biography</MenuItem>
					<MenuItem value="Comedy">Comedy</MenuItem>
					<MenuItem value="Crime">Crime</MenuItem>
					<MenuItem value="Documentary">Documentary</MenuItem>
					<MenuItem value="Drama">Drama</MenuItem>
					<MenuItem value="Family">Family</MenuItem>
					<MenuItem value="Fantasy">Fantasy</MenuItem>
					<MenuItem value="Film-Noir">Film-Noir</MenuItem>
					<MenuItem value="History">History</MenuItem>
					<MenuItem value="Horror">Horror</MenuItem>
					<MenuItem value="Music">Music</MenuItem>
					<MenuItem value="Musical">Musical</MenuItem>
					<MenuItem value="Mystery">Mystery</MenuItem>
					<MenuItem value="Romance">Romance</MenuItem>
					<MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
					<MenuItem value="Short">Short</MenuItem>
					<MenuItem value="Sport">Sport</MenuItem>
					<MenuItem value="Thriller">Thriller</MenuItem>
					<MenuItem value="War">War</MenuItem>
					<MenuItem value="Western">Western</MenuItem>
				</SelectCustom>
			</FormControl>
		</SelectWrapper>
	);
}

export default GenreSelect;

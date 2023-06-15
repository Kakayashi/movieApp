import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Ract, { useState } from "react";
import styled from "styled-components";
import useCountryList from "../../../hooks/useCountryList";
import axios from "axios";

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
	const yearOptions = [];

	return yearOptions;
};

function CountrySelect({ onSwitchChange, val }) {
	// const { countries, isLoading } = useCountryList();
	let data =
		'<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>500</ubiNum>\n    </NumberToWords>\n  </soap:Body>\n</soap:Envelope>';

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "https://www.dataaccess.com/webservicesserver/NumberConversion.wso",
		headers: {
			"Content-Type": "text/xml; charset=utf-8",
		},
		timeout: 1000,
		data: data,
	};

	axios(config)
		.then((response) => {
			console.log(JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<SelectWrapper>
			<FormControl fullWidth>
				<CustomInputLabel id="country-label2">Year</CustomInputLabel>
				<SelectCustom
					labelId="country-label"
					id="country"
					value={val}
					label="Country"
					onChange={onSwitchChange}
				>
					<MenuItem value="" disabled>
						Select country
					</MenuItem>
					{/* {isLoading ? (
						<MenuItem value="">Loading...</MenuItem>
					) : (
						renderCountryOptions()
					)} */}
				</SelectCustom>
			</FormControl>
		</SelectWrapper>
	);
}

export default CountrySelect;

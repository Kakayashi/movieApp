import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomInput = styled(TextField)`
	&& {
		input {
			color: #fff; /* Kolor tekstu */
		}
		textarea {
			color: #fff; /* Kolor tekstu dla pola wielolinijkowego */
			width: 400px;
		}
		.MuiOutlinedInput-root {
			fieldset {
				border-color: #fff; /* Kolor bordera */
			}
			&:hover fieldset {
				border-color: rgb(245, 197, 24); /* Kolor bordera dla stanu hover */
			}
			&.Mui-focused fieldset {
				border-color: rgb(245, 197, 24); /* Kolor bordera dla stanu aktywnego */
			}
		}
		label {
			color: #fff; /* Kolor labela */
		}
		.Mui-focused label {
			color: rgb(245, 197, 24); /* Kolor labela dla stanu aktywnego */
		}
	}
`;

function CustomInputComponent({ label, rows, value, setValue, disabled }) {
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<CustomInput
			label={label}
			variant="outlined"
			value={value}
			onChange={handleChange}
			rows={rows}
			{...(disabled === true ? { disabled: true } : {})}
			{...(rows > 1 ? { multiline: true } : {})}
			{...(label === "Password" ? { type: "password" } : {})}
		/>
	);
}

export default CustomInputComponent;

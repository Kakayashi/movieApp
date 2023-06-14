import { Box, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { StyledSwich } from "./CustomSwitch.style";

export const CustomSwitch = ({ label, onSwitchChange }) => {
	const [checked, setChecked] = useState(true);
	console.log({ checked });
	const handleChange = () => {
		setChecked(!checked);
		onSwitchChange(!checked);
	};

	return (
		<>
			<Box>
				<FormControlLabel
					label={label}
					control={<StyledSwich checked={checked} onChange={handleChange} />}
				/>
			</Box>
		</>
	);
};

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { StyledSlider } from "./CustomSlider.style";

export default function CustomSlider({ label, onSwitchChange, track }) {
	const handleChange = (value) => {
		onSwitchChange(value);
	};

	return (
		<>
			Rating:
			<Box sx={{ width: 200 }}>
				<StyledSlider
					aria-label={label}
					defaultValue={1}
					getAriaValueText={handleChange}
					valueLabelDisplay="auto"
					step={0.25}
					marks
					min={1}
					max={10}
					track={track ? "inverted" : "normal"}
				/>
			</Box>
		</>
	);
}

import styled from "styled-components";
import { Slider } from "@mui/material";

export const StyledSlider = styled(Slider)`
	.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
		+ .MuiSwitch-track {
		background-color: ${({ checked, theme }) =>
			checked ? theme.colors.gold : theme.colors.goldDisabled};
	}

	.MuiSwitch-thumb {
		background-color: ${({ theme }) => theme.colors.gold};
		color: ${({ theme }) => theme.colors.gold};
	}
	.css-1gv0vcd-MuiSlider-track {
		background-color: ${({ theme }) => theme.colors.gold};
		color: ${({ theme }) => theme.colors.gold};
	}

	.MuiSlider-rail {
		color: ${({ theme }) => theme.colors.gold};
	}

	.css-eg0mwd-MuiSlider-thumb {
		color: ${({ theme }) => theme.colors.gold};
	}
	.MuiSlider-rail + .css-1xst22u-MuiSlider-rail {
		background-color: ${({ theme }) => theme.colors.black} !important;
	}
	.css-1h4p1o1-MuiSlider-track {
		background-color: ${({ theme }) => theme.colors.blackHover} !important;
	}
`;

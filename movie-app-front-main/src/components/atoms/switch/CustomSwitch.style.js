import styled from "styled-components";
import { Box, FormControlLabel, Switch } from "@mui/material";

export const StyledSwich = styled(Switch)`
	/* .MuiSwitch-track {
		background-color: ${({ theme }) =>
		theme.colors.goldDisabled}; // Kolor tła (track)
	} */

	.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
		+ .MuiSwitch-track {
		background-color: ${({ checked, theme }) =>
			checked ? theme.colors.gold : theme.colors.goldDisabled};
	}

	.MuiSwitch-thumb {
		color: ${({ checked, theme }) =>
			checked ? theme.colors.gold : theme.colors.goldDisabled};
	}
	.MuiSwitch-track {
		background-color: ${({ checked, theme }) =>
			checked ? theme.colors.gold : theme.colors.goldDisabled};
	}
`;

//${({ theme }) => theme.colors.goldHover};

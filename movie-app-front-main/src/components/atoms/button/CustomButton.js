import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const But = styled(Button)({
	backgroundColor: "rgb(245,197,24)",
	fontWeight: 700,
	marginLeft: "20px",
	marginTop: "-10px",
	"&:hover": {
		backgroundColor: "rgb(245,197,24)",
	},
});

function CustomButton({ text, func }) {
	return (
		<But variant="contained" onClick={func}>
			{text}
		</But>
	);
}

export default CustomButton;

import styled from "styled-components";

export const SearchButton = styled.button`
	position: absolute;
	background: ${({ theme }) => theme.colors.orange};
	z-index: 200;
	color: white;
	background-color: gold;
	width: 80px;
	height: 40px;
	font: inherit;
	border: none;
	margin: 0;
	text-decoration: none;
	outline: inherit;
	font-weight: 700;
	color: grey;
	cursor: pointer;
	top: 255px;
	left: 900px;
	transition: all 0.4 ease-in-out;

	&:hover {
		background-color: #f5c518;
	}
`;

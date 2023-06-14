import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/fa";
export const Wrapper = styled.div`
	width: 100%;
	height: 60px;
	position: relative;
	top: 0;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const WrapperItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Logo = styled.div`
	margin: 30px;
	font-size: 30px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.gold};
	padding: 5px;
	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
		background: ${({ theme }) => theme.colors.blackHover};
	}
`;

export const StyledLink = styled(NavLink)`
	font-size: 20px;
	margin-inline: 15px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.gold};
	font-size: 20px;
	transition: 0.2s ease-in-out;
	padding: 5px;

	margin-right: ${({ marginRight }) => (marginRight ? "40px" : "auto")};

	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
		background: ${({ theme }) => theme.colors.blackHover};
	}
`;

export const StyledSearch = styled.input`
	border: 2px solid ${({ theme }) => theme.colors.gold};
	width: 200px;
	width: ${({ hasFocus }) => (hasFocus === true ? "400px" : "200px")};
	transition: all 0.2s ease-in-out;
	height: 30px;
	background: ${({ theme }) => theme.colors.black};
	border-radius: 30px;
	font-size: 20px;
	text-align: center;
	margin-inline: 15px;
	color: ${({ theme }) => theme.colors.gold};

	position: relative;
	cursor: pointer;
`;

export const StyledSearchWrapper = styled.div`
	position: relative;

	svg {
		position: absolute;
		left: 25px;
		top: 10px;
		fill: ${({ theme }) => theme.colors.gold};
		cursor: pointer;
	}
`;

export const SearchResultWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	max-height: 300px;
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: black;
	left: 20px;
	z-index: 100;
`;

export const SearchResultItem = styled.div`
	color: #fff;
	border-bottom: 2px solid gold;
	width: 390px;
	min-height: 80px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;

	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
	}
`;
export const SmallPoster = styled.img`
	width: 40px;
`;

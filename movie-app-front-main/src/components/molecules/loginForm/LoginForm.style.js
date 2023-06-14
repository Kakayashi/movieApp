import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormWrapper = styled.div`
	display: flex;
	padding: 50px;
	background-color: ${({ theme }) => theme.colors.black};
	color: #fff;
	width: 400px;
	flex-direction: column;
	border: 2px solid gold;
	margin-top: 100px;
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;

	span {
		margin-bottom: 5px;
	}

	h2 {
		margin-top: 0;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	margin-inline: auto;
	margin-top: 20px;
	text-align: center;

	Button {
		margin-left: 0px;
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
	margin-top: -10px;

	&:hover {
		color: ${({ theme }) => theme.colors.goldHover};
		background: ${({ theme }) => theme.colors.blackHover};
	}
`;

export const StyledError = styled.span`
	color: red;
	text-align: center;
`;

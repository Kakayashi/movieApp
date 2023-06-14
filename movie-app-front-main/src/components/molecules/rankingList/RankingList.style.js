import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
	padding-inline: 200px;
	border-top: 2px solid ${({ theme }) => theme.colors.black};
	///background: ${({ theme }) => theme.colors.black};
`;

export const ListTitle = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-size: 40px;
	margin-left: 100px;
`;

export const ListItemBackground = styled.div`
	background-color: ${(props) =>
		props.index % 2 === 0 ? props.theme.colors.black : "#000"};
	padding-inline: 100px;
	transition: background-color 0.5s ease-in-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.goldDisabled};
	}
`;

export const ListItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin: 25px;
	height: 130px;
	cursor: pointer;
`;

export const ListItemInfo = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const ListItemInfoNumber = styled.div`
	color: #fff;
	width: 40px;
	text-align: center;
	font-size: 30px;
`;

export const ListItemInfoImage = styled.img`
	width: 80px;
	height: 120px;
`;

export const ListItemInfoTitle = styled.div`
	margin: 25px;
	font-size: 22px;
`;

export const ListItemRatigContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const StyledStatr = styled(AiFillStar)`
	fill: ${({ theme }) => theme.colors.gold};
`;

export const Review = styled.div`
	font-size: 20px;
	position: relative;

	&::after {
		position: absolute;
		content: "${(props) => props.reviewsnumber} Reviews";
		top: 20px;
		left: -35px;
		font-size: 14px;
		width: 200px;
	}
`;

export const ButtonWrapper = styled.div`
	margin-inline: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px;
`;

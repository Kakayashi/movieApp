import styled from "styled-components";
import img from "./../../../assets/filmRoll5.png";

export const BannerWrapper = styled.div`
	width: 100vw;
	height: 120px;
	display: flex;
	align-items: center;
	background-image: url(${img});
	background-size: contain;
`;

export const BannerTitle = styled.h1`
	color: ${({ theme }) => theme.colors.gold};
	font-size: 64px;
	margin-left: 40px;
`;

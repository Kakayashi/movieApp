import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";

export const MovieWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-inline: 100px;
	color: #fff;
`;

export const MovieTitle = styled.h1`
	color: #fff;
	font-size: 44px;
	margin-bottom: 0;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ gap }) => (gap ? gap : "0")};
	flex-wrap: wrap;
`;
export const RowInfo = styled.div`
	margin: 10px 10px;
	&:nth-child(1) {
		margin-left: 0px;
	}
`;

export const GenereContainer = styled.div`
	font-size: 16px;
	padding: 4px;
	border: 2px solid #fff;
	border-radius: 30px;
	margin-inline: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: ${({ theme }) => theme.colors.gold};
		color: #000;
	}
`;

export const MoviePoster = styled.img`
	width: 255px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CustomTitle = styled.h2`
	font-size: 32px;
	margin-bottom: 0;
`;

export const CarouselWrapper = styled.div`
	width: 90vw;
`;

export const CarouselImage = styled.img`
	width: 380px;
`;

export const CarouselImageSmall = styled.img`
	width: 240px;
`;

export const Desctiption = styled.p`
	font-size: 24px;
	font-size: 24px;
`;

export const StyledStatr = styled(AiFillStar)`
	margin-bottom: -30px;
	margin-left: 20px;
	fill: ${({ theme }) => theme.colors.gold};
`;

export const StyledStatr2 = styled(AiFillStar)`
	fill: ${({ theme }) => theme.colors.gold};
	margin-bottom: -10px;
`;

export const Review = styled.div`
	font-size: 36px;
	position: relative;
	margin-bottom: -24px;

	&::after {
		position: absolute;
		content: "${(props) => props.reviewsnumber} Reviews";
		top: 14px;
		left: 60px;
		font-size: 24px;
		width: 400px;
	}
`;

export const CarouselItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 40px;
`;

export const ReviewItem = styled.div`
	margin: 20px 0;
`;

export const ReviewContainer = styled.div`
	display: flex;
	flex-direction: row;

	gap: 20px;
`;

export const CommentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid white;
	width: 400px;
	gap: 20px;
	margin: 20px 0;
	border-radius: 10px;
	color: #fff;
	position: relative;
`;

export const CommentInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-top: 20px;
`;

export const CommentDelete = styled(RiDeleteBin7Fill)`
	position: absolute;
	width: 40px;
	right: 10px;
	top: 10px;
	fill: ${({ theme }) => theme.colors.gold};
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		fill: ${({ theme }) => theme.colors.goldHover};
	}
`;



export const CommentNote = styled.div`
	font-size: 20px;
	padding: 20px;
	width: 300px;
	height: auto;
	word-wrap: break-word;
`;

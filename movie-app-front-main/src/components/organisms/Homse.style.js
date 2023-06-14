import styled from "styled-components";

export const DescriptionWrapper = styled.div`
	display: flex;
	color: #fff;
	flex-direction: column;
	align-items: center;

	p {
		width: 800px;
		font-size: 22px;
	}
`;

export const DescriptionTitle = styled.h2`
	font-weight: 700;
	font-size: 60px;
	margin-bottom: 0;

	span {
		color: ${({ theme }) => theme.colors.gold};
	}
`;

export const SplideWrapper = styled.div`
	color: #fff;
	margin-top: 50px;
`;

export const CarouselItem = styled.div`
	display:: flex;
	flex-direction: column;
	width: 200px;
	margin-bottom:20px
`;

export const CarouselImage = styled.img`
	width: 200px;
`;

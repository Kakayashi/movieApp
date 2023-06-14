import styled from "styled-components";

//${({ theme }) => theme.colors.gold}

export const RankingFiltersWrapper = styled.div`
	background: #000;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-inline: 100px;
	color: ${({ theme }) => theme.colors.gold};
`;

export const RankingFilterTitle = styled.h2`
	font-size: 40px;
	margin: 0;
`;

export const FiltersContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	padding-inline: 50px;
`;

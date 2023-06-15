import React from "react";
import useFetchGames from "../../../hooks/useFetchGames";
import {
	ListWrapper,
	ListTitle,
	ListItem,
	ListItemInfo,
	ListItemInfoNumber,
	ListItemInfoTitle,
	ListItemInfoImage,
	ListItemBackground,
	ListItemRatigContainer,
	StyledStatr,
	Review,
	ButtonWrapper,
} from "../rankingList/RankingList.style";

function GameList() {
	const { games, isLoading, error } = useFetchGames();

	if (isLoading) {
		return <ListTitle>Loading games...</ListTitle>;
	}

	if (error) {
		return <ListTitle>Error: {error}</ListTitle>;
	}

	let index = -1;
	return (
		<ListWrapper>
			<ListTitle>Game List</ListTitle>
			{games.map((item) => {
				index++;
				return (
					<ListItemBackground key={item.id + Math.random()} index={index}>
						<ListItem>
							<ListItemInfo>
								<ListItemInfoNumber>{index + 1 + "."}</ListItemInfoNumber>
								<ListItemInfoImage src={item.image} />
								<ListItemInfoTitle>{item.name}</ListItemInfoTitle>
							</ListItemInfo>
							<ListItemRatigContainer>
								<StyledStatr size={24} />
								<Review reviewsnumber={item.vote_count}>
									{item.rating.toFixed(1)}
								</Review>
							</ListItemRatigContainer>
						</ListItem>
					</ListItemBackground>
				);
			})}
		</ListWrapper>
	);
}

export default GameList;

import React from "react";
import Banner from "../atoms/banner/Banner";
import GameList from "../molecules/gamesList/GameList";

function Games() {
	return (
		<>
			<Banner title={"Games"} />
			<GameList />
		</>
	);
}

export default Games;

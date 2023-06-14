import React from "react";
import Banner from "../atoms/banner/Banner";
import RankingList from "../molecules/rankingList/RankingList";
import RankingFilters from "../molecules/rankingFilters/RankingFilters";

function Ranking() {
	return (
		<>
			<Banner title={"Ranking"} />
			{/* <RankingFilters /> */}
			<RankingList />
		</>
	);
}

export default Ranking;

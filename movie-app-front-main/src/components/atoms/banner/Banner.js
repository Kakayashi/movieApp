import React from "react";
import { BannerWrapper, BannerTitle } from "./Banner.style";

function Banner({ title }) {
	return (
		<BannerWrapper>
			<BannerTitle>{title}</BannerTitle>
		</BannerWrapper>
	);
}

export default Banner;

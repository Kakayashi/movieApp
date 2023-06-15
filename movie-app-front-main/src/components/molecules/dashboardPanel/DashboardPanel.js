import React, { useState } from "react";
import {
	DashboardWrapper,
	DashboardPannelMenu,
	DashboardContent,
} from "./DashboardPannel.style";
import DashboardXml from "./DashboardXml";
import DashboardJson from "./DashboardJson";
import DashboardUser from "./DashboardUser";

function DashboardPanel() {
	const [menu, setMenu] = useState("XML");

	const handleSet = (el) => {
		setMenu(el);
	};

	return (
		<DashboardWrapper>
			<DashboardPannelMenu>
				<span onClick={() => handleSet("XML")}>XML</span>
				<span onClick={() => handleSet("JSON")}>JSON</span>
				<span onClick={() => handleSet("User")}>User Edit</span>
			</DashboardPannelMenu>
			<DashboardContent>
				{menu === "XML" ? (
					<DashboardXml />
				) : menu === "JSON" ? (
					<DashboardJson />
				) : (
					<DashboardUser />
				)}
			</DashboardContent>
		</DashboardWrapper>
	);
}

export default DashboardPanel;

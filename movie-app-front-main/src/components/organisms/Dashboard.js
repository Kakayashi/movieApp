import { useEffect } from "react";
import React from "react";
import Banner from "../atoms/banner/Banner";
import DashboardPanel from "../molecules/dashboardPanel/DashboardPanel";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const role = sessionStorage.getItem("role");
	const navigate = useNavigate();

	useEffect(() => {
		if (role !== "1") {
			navigate(`/home`);
		}
	}, [role]);

	return (
		<>
			<Banner title={"Dashboard"} />
			<DashboardPanel />
		</>
	);
}

export default Dashboard;

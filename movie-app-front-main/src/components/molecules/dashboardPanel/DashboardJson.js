import React from "react";
import {
	DashboardContentTitle,
	ImportWrapper,
	ExportItem,
} from "./DashboardPannel.style";
import CustomButton from "../../atoms/button/CustomButton";

function DashboardJson() {
	const handleExpoer = () => {
		console.log("export json");
	};

	const handleImport = () => {
		var formData = new FormData();
		var imagefile = document.querySelector("#file");
		formData.append("file", imagefile.files[0]);

		console.log("eks");
	};

	return (
		<>
			<DashboardContentTitle>Json</DashboardContentTitle>
			<ImportWrapper>
				<span>Import:</span>
				<ExportItem>
					<input type="file" />
					<CustomButton text={"Import"} fun={handleExpoer} />
				</ExportItem>
			</ImportWrapper>
			<ImportWrapper>
				<span>Export:</span>
				<a href="http://localhost:8000/api/export/json">
					<CustomButton text={"Eksport"} func={handleExpoer} />
				</a>
			</ImportWrapper>
		</>
	);
}

export default DashboardJson;

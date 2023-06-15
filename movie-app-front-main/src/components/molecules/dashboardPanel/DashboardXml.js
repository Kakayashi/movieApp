import React from "react";
import {
	DashboardContentTitle,
	ImportWrapper,
	ExportItem,
} from "./DashboardPannel.style";
import CustomButton from "../../atoms/button/CustomButton";
import { useNavigate } from "react-router-dom";

function DashboardXml() {
	const navigate = useNavigate();

	const handleExport = () => {
		console.log("export xml");
	};

	const handleImport = () => {
		var formData = new FormData();
		var imagefile = document.querySelector("#file");
		formData.append("file", imagefile.files[0]);

		console.log("eks");
	};

	return (
		<>
			<DashboardContentTitle>XML</DashboardContentTitle>
			<ImportWrapper>
				<span>Import:</span>
				<ExportItem>
					<input id="file" type="file" />
					<CustomButton text={"Import"} func={handleExport} />
				</ExportItem>
			</ImportWrapper>
			<ImportWrapper>
				<span>Export:</span>
				<a href="http://localhost:8000/api/export/xml">
					<CustomButton
						text={"Eksport"}
						func={handleExport}
						onClick={() => handleExport()}
					/>
				</a>
			</ImportWrapper>
		</>
	);
}

export default DashboardXml;

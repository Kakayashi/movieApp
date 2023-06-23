import React, { useState } from "react";
import {
	DashboardContentTitle,
	ImportWrapper,
	ExportItem,
} from "./DashboardPannel.style";
import CustomButton from "../../atoms/button/CustomButton";
import axios from "axios";

function DashboardXml() {
	const [importMessage, setImportMessage] = useState("");
	const accessToken = sessionStorage.getItem("token");


	const handleExport = () => {
		console.log("export xml");
	};

	const handleImport = async () => {
		setImportMessage("importing!");
		const fileInput = document.getElementById("file");
		const file = fileInput.files[0];
		const formData = new FormData();
		formData.append("plik", file);

		try {
			await axios.post("http://localhost:8000/api/import/json", formData , {
				headers: {
				  Authorization: `Bearer ${accessToken}`,
				},
			});
			setImportMessage("File uploaded successfully");
		} catch (error) {
			setImportMessage("Error uploading file: ");
		}
	};

	return (
		<>
			<DashboardContentTitle>XML</DashboardContentTitle>
			<span>{importMessage}</span>
			<ImportWrapper>
				<span>Import:</span>
				<ExportItem>
					<input id="file" type="file" />
					<CustomButton text={"Import"} func={handleImport} />
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

import React, { useState } from "react";
import {
	DashboardContentTitle,
	ImportWrapper,
	ExportItem,
} from "./DashboardPannel.style";
import CustomButton from "../../atoms/button/CustomButton";
import axios from "axios";

function DashboardJson() {
	const [importMessage, setImportMessage] = useState("");
	const accessToken = sessionStorage.getItem("token");


	const handleExpoer = () => {
		console.log("export json");
	};

	const handleImport = async () => {
		setImportMessage("importing!");
		const fileInput = document.getElementById("file");
		const file = fileInput.files[0];
		const formData = new FormData();
		formData.append("plik", file);

		try {
			await axios.post("http://localhost:8000/api/import/json", formData, {
			  headers: {
				Authorization: `Bearer ${accessToken}`
			  },
			});
			setImportMessage("File uploaded successfully");
		  } catch (error) {
			setImportMessage("Error uploading file: " + error.message);
		  }
	};

	return (
		<>
			<DashboardContentTitle>Json</DashboardContentTitle>
			<span>{importMessage}</span>
			<ImportWrapper>
				<span>Import:</span>
				<ExportItem>
					<input type="file" id="file" />
					<CustomButton text={"Import"} func={handleImport} />
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

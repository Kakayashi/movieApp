import React, { useState } from "react";
import {
	DashboardContentTitle,
	DashboardUserEditWrapper,
	DashboardUserEditContainer,
	UserItem,
	RowContainer,
} from "./DashboardPannel.style";
import CustomInput from "../../atoms/input/CustomInput";
import CustomButton from "../../atoms/button/CustomButton";
import useUserList from "../../../hooks/useUserList";
import axios from "axios";

function DashboardUser() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [id, setId] = useState("");
	const [editMessage, setEditMessage] = useState("");

	const [refreshKey, setRefreshKey] = useState(0); // Klucz odświeżania komponentu
	const accessToken = sessionStorage.getItem("token");
	const { users, isLoading, fetchUsers } = useUserList();

	const handleRefresh = () => {
		if (isLoading == false) {
			setRefreshKey((prevKey) => prevKey + 1);
			fetchUsers(accessToken);
		}
	};

	const handleChange = async () => {
		setEditMessage("Editing...");
		console.log({
			name: name,
			email: email,
			password: password,
			country_short: "PL",
			role_id: role,
			id: `http://localhost:8000/api/user/update/${id}`,
		});

		try {
			const response = await axios.put(
				`http://localhost:8000/api/user/update/${id}`,
				{
					name: name,
					email: email,
					password: password,
					country_short: "PL",
					role_id: role,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			if (response.status === 200) {
				setEditMessage("Success!");
				// Jeśli sukces, odśwież listę użytkowników
				handleRefresh();
			}
		} catch (error) {
			setEditMessage("Error!");
			console.error(error);
		}
	};

	const handleSetUser = (id, name, email, password, role) => {
		setId(id);
		setName(name);
		setEmail(email);
		setPassword(password);
		setRole(role);
	};

	console.log("Users", users);
	console.log("Users", isLoading);

	return (
		<>
			<DashboardContentTitle>User Edit</DashboardContentTitle>
			<DashboardUserEditWrapper>
				<h1>User Edit:</h1>
				<DashboardUserEditContainer>
					<CustomInput label={"Id"} rows={1} value={id} setValue={setId} />
					<CustomInput
						label={"Name"}
						rows={1}
						value={name}
						setValue={setName}
					/>
					<CustomInput
						label={"Email"}
						rows={1}
						value={email}
						setValue={setEmail}
					/>
					<CustomInput
						label={"Password"}
						rows={1}
						value={password}
						setValue={setPassword}
						disabled={true}
					/>
					<CustomInput
						label={"Role"}
						rows={1}
						value={role}
						setValue={setRole}
					/>
					<CustomButton text={"Edit"} func={handleChange} />
				</DashboardUserEditContainer>
				<p>{editMessage}</p>

				<DashboardUserEditWrapper>
					<RowContainer>
						<h1>Users List:</h1>
						<CustomButton text={"Load"} func={handleRefresh} />
					</RowContainer>
					<UserItem>
						<span>id:</span>
						<span>Name:</span>
						<span>Email:</span>
						<span>Role:</span>
					</UserItem>

					{isLoading ? (
						<UserItem>
							<span>Loading...</span>
						</UserItem>
					) : (
						<>
							{users.map((user) => {
								return (
									<UserItem
										key={user.id}
										onClick={() =>
											handleSetUser(
												user.id,
												user.name,
												user.email,
												user.password,
												user.role_id
											)
										}
									>
										<span>{user.id}</span>

										<span>{user.name}</span>
										<span>{user.email}</span>
										<span> {user.role_id}</span>
										<span>
											<CustomButton text={"Edit"} />{" "}
										</span>
									</UserItem>
								);
							})}
						</>
					)}
				</DashboardUserEditWrapper>
			</DashboardUserEditWrapper>
		</>
	);
}

export default DashboardUser;

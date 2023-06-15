import React, { useState } from "react";
import {
	FormWrapper,
	FormItem,
	ButtonWrapper,
	StyledLink,
	StyledError,
} from "./LoginForm.style";
import CustomInputComponent from "../../atoms/input/CustomInput";
import CustomButton from "../../atoms/button/CustomButton";
import axios from "axios"; // Dodajemy import biblioteki Axios
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [validationError, setValidationError] = useState([]);
	const [isLoading, setIsLoading] = useState(false); // Dodajemy isLoading
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!isLoading) {
			setValidationError([]);

			if (login.trim() === "") {
				setValidationError(["Please enter your login"]);
				return;
			}

			if (password.trim() === "") {
				setValidationError(["Please enter your password"]);
				return;
			}

			setIsLoading(true); // Ustawiamy isLoading na true

			let bodyFormData = new FormData();
			bodyFormData.append("email", login);
			bodyFormData.append("password", password);
			setValidationError(["Loading"]);
			axios({
				method: "post",
				url: "http://localhost:8000/api/auth/login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					setIsLoading(false); // Ustawiamy isLoading na false po zakończeniu żądania
					if (response.data.error) {
						console.log("error");
						console.log(response.data);
					} else {
						console.log("succes");
						console.log(response.data);
					}
					console.log(response.data);
					setValidationError(["logged in"]);
					sessionStorage.setItem("token", response.data.access_token);
					sessionStorage.setItem("role", response.data.role);
					console.log(response);
					navigate(`/`);
					return;
				})
				.catch(function (response) {
					setIsLoading(false); // Ustawiamy isLoading na false po zakończeniu żądania
					console.log("error2");
					setValidationError(["Incorrect email or password"]);
					console.log(response);
					return;
				});
		}
	};

	return (
		<FormWrapper>
			<FormItem>
				<h2>Login:</h2>
			</FormItem>
			<FormItem>
				<span>Email</span>
				<CustomInputComponent
					label={"Email"}
					rows={1}
					value={login}
					setValue={setLogin}
				/>
			</FormItem>
			<FormItem>
				<span>Password:</span>
				<CustomInputComponent
					label={"Password"}
					rows={1}
					value={password}
					setValue={setPassword}
					type={"password"}
				/>
			</FormItem>
			<FormItem>
				<ButtonWrapper onClick={handleLogin} disabled={isLoading}>
					{/* Dodajemy disabled do przycisku */}
					<CustomButton text={"Login"} />
				</ButtonWrapper>
				<ButtonWrapper>
					<StyledLink to="/register">Register</StyledLink>
				</ButtonWrapper>
				{validationError.map((el) => (
					<StyledError key={el}>{el}</StyledError>
				))}
			</FormItem>
		</FormWrapper>
	);
}

export default LoginForm;

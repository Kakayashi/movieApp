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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CountrySelect from "../../atoms/select/CountrySelect";

function RegisterForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [country, setCountry] = useState(false);
	const navigate = useNavigate();

	const handleRegister = () => {
		if (!isLoading) {
			setValidationErrors([]);

			if (name.trim() === "") {
				setValidationErrors([
					...validationErrors,
					"Please enter your first name",
				]);
				return;
			}

			if (email.trim() === "") {
				setValidationErrors([...validationErrors, "Please enter your email"]);
				return;
			}

			if (password.trim() === "") {
				setValidationErrors([
					...validationErrors,
					"Please enter your password",
				]);
				return;
			}

			setIsLoading(true);

			let bodyFormData = new FormData();
			bodyFormData.append("name", name);
			bodyFormData.append("email", email);
			bodyFormData.append("password", password);
			bodyFormData.append("password_confirmation", password);
			bodyFormData.append("country_short", "PL"); //////////////////////////////////////////////////////////////////////////edit

			setValidationErrors(["Loading..."]);

			axios({
				method: "post",
				url: "http://localhost:8000/api/auth/register",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					setIsLoading(false);
					if (response.data.status === 400) {
						console.log("error");
						console.log(response.data);
						setValidationErrors([response.data.data]);
					} else {
						console.log("success");
						console.log(response.data);
					}
					console.log(response.data);
					setValidationErrors(["registered"]);
					navigate(`/login`);
					console.log(response);

					return;
				})
				.catch(function (response) {
					setIsLoading(false);
					console.log("error");

					let errors = JSON.parse(response.response.data);
					errors = Object.values(errors).flat();
					console.log(response);
					console.log(errors);
					setValidationErrors([...errors]);

					return;
				});
		}
	};

	return (
		<FormWrapper>
			<FormItem>
				<h2>Register:</h2>
			</FormItem>
			<FormItem>
				<span>Name</span>
				<CustomInputComponent
					label={"Name"}
					rows={1}
					value={name}
					setValue={setName}
				/>
			</FormItem>

			<FormItem>
				<span>Email</span>
				<CustomInputComponent
					label={"Email"}
					rows={1}
					value={email}
					setValue={setEmail}
				/>
			</FormItem>

			<FormItem>
				<span>Password</span>
				<CustomInputComponent
					label={"Password"}
					rows={1}
					value={password}
					setValue={setPassword}
				/>
			</FormItem>

			<FormItem>
				<span>Country</span>
				<CountrySelect onSwitchChange={setCountry} val={country} />
			</FormItem>

			<FormItem>
				<ButtonWrapper onClick={handleRegister}>
					<CustomButton text={"Register"} />
				</ButtonWrapper>
				<ButtonWrapper>
					<StyledLink to="/login">Login</StyledLink>
				</ButtonWrapper>
				{validationErrors.map((el) => (
					<StyledError key={el}>{el}</StyledError>
				))}
			</FormItem>
		</FormWrapper>
	);
}

export default RegisterForm;

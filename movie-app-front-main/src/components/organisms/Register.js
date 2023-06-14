import React from "react";
import Banner from "../atoms/banner/Banner";
import RegisterForm from "../molecules/loginForm/RegisterForm";
import { FormWrapper2 } from "./Login.style";

function Register() {
	return (
		<>
			<Banner title={"Register"} />
			<FormWrapper2>
				<RegisterForm />
			</FormWrapper2>
		</>
	);
}

export default Register;

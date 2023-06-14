import React from "react";
import Banner from "../atoms/banner/Banner";
import LoginForm from "../molecules/loginForm/LoginForm";
import { FormWrapper } from "./Login.style";

function Login() {
	return (
		<>
			<Banner title={"Login"} />
			<FormWrapper>
				<LoginForm />
			</FormWrapper>
		</>
	);
}

export default Login;

import React from 'react';
import { useState } from 'react';
import { CInput } from '../CInput/CInput';

export const Login = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		console.log('handleChange');
		setCredentials((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value, //se ponen corchetes para indicar que esa propiedad es dinámica y cambia
		}));
	}
	function login() {
		console.log('login');
		console.log(credentials);
	}
	return (
		<>
			<h1>Login</h1>
			<div>
				<CInput
					type="email"
					name="email"
					placeholder="Email"
					emitFuntion={handleChange}
				/>
			</div>
			<div>
				<CInput
					type="password"
					name="password"
					placeholder="Password"
					emitFunction={handleChange}
				/>
			</div>
			<CInput
				type="button"
                name="button"
				value="Login"
				clickFunction={login}
			/>
		</>
	);
};

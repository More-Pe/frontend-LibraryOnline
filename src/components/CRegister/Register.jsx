import React from 'react';
import { useState } from 'react';

export const Register = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const handleChange = (e) => {
		console.log('HandleChange');
		setCredentials((prevState) => ({
			//prev State gets the initial value of the credentials variable
			...prevState,
			[e.target.name]: e.target.value, //la propiedad [] es dinamica
		}));
	};
	const register = async () => {
		console.log('Register');
		console.log(credentials);
		//validar la data que voy a enviar
		//una vez si es valida vamos a llamar la BD mediante la API
		try {
			const request = await fetch('http://localhost:4000/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(credentials),
			});
			const result = await request.json();
			console.log(result);
		} catch (error) {
			console.log(error);
		}
		// La api puede devolver OK o NOT OK
		// Si la API devuelve OK ->
		// Si la API devuelve false  -> res.status(500)
	};
	return (
		<>
			<h1>Register</h1>
			<div>
				{/* <label htmlFor="email">Email </label> */}
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={handleChange}
				/>
			</div>
			<div>
				{/* <label htmlFor="password">Password </label> */}
				<input
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleChange}
				/>
			</div>
			<input
				type='button'
				value='Register'
				onClick={register}
			/>
		</>
	);
};

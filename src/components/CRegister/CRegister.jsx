import React from 'react';
import { useState } from 'react';
import { CInput } from '../CInput/CInput';
import { RegisterUser } from '../../Services/apiCalls';
import { useNavigate } from 'react-router-dom';

export const CRegister = () => {
	const navigate = useNavigate();

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
	async function register() {
		try {
			console.log(credentials);
			const response = await RegisterUser(credentials); // guarda la repsuesta en una variale


			if (response.success) {
				navigate('/login');
			} else {
				alert(response.message)
			}
			
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<h1>Register</h1>
			<div>
				{/* <label htmlFor="email">Email </label> */}
				<CInput
					type='email'
					name='email'
					placeholder='Email'
					emitFunction={handleChange}
				/>
			</div>
			<div>
				{/* <label htmlFor="password">Password </label> */}
				<CInput
					type='password'
					name='password'
					placeholder='Password'
					emitFunction={handleChange}
				/>
			</div>
			<CInput
				type='button'
				name="r-button"
				value='Register'
				clickFunction={register}
			/>
		</>
	);
};

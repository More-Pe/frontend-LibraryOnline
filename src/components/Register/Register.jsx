import React from 'react'
import { useState } from 'react';

export const Register = () => {
  const [credentials, setcredentials] = useState(
    {
      email: "",
      password: ""
    }
  )

  function handleChange(e){
    console.log("handleChange");
    setcredentials(prevState =>(
    {
      ...prevState,
      [e.target.name]: e.target.value //se ponen corchetes para indicar que esa propiedad es dinámica y cambia
    }
    ))
  }
  function register(){
    console.log('register');
    console.log(credentials);
  }
	return (
		<>
			<h1>Register</h1>
      <div>
        <input
				type="email"
				name="email"
        placeholder="Email"
        onChange={handleChange}
			/>
      </div>
      <div>
        <input
				type="password"
				name="password"
        placeholder="Password"
        onChange={handleChange}
			/>
      </div>
			<input
				type="button"
				value="Register"
        onClick={register}
			/>
		</>
	);
}

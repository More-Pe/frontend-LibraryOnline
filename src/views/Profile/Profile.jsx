import React from 'react';
import { useState } from 'react';
import { CInput } from '../../components/CInput/CInput';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfile } from '../../apiCalls/apiCalls';

export const Profile = () => {

    const [profileData, setProfileData] = useState({
        name: "",
        is_active: null,
        created_at: "",
        updated_at: ""
    })

	const passport = JSON.parse(localStorage.getItem('passport'));
    let token;

    const navigate = useNavigate();

    useEffect(() => {
        if (!passport) {
          navigate("/login");
        }
        else {
          const bringMyProfile = async () => {
            const response = await getProfile(passport.token);
            setProfileData(response.data);
            console.log(response)
          }
          bringMyProfile()
        }
      }, []);
    

    const logout = () => {
        localStorage.removeItem('passport');
        console.log("Byeeeeeeee");

    }



	// const email = passport?.tokenData.email;

	return(
    <>
    <p>Name: {profileData.name}</p>
    <p>Active?: {profileData.is_active ? 'Yes' : 'No'}</p>
    <p>Created at: {profileData.created_at}</p>
    <p>Updated at: {profileData.updated_at}</p>
    <CInput type="button" name="logout" clickFunction={logout} value="Logout"/>

    </>

    );
};

import React from 'react';
import { useState } from 'react';
import { CInput } from '../../components/CInput/CInput';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfile, updateProfile } from '../../apiCalls/apiCalls';
import './Profile.css';

export const Profile = () => {
	const [profileData, setProfileData] = useState({
		name: '',
		is_active: null,
		created_at: '',
		updated_at: '',
	}); const [editData, setEditData] = useState({
    name: "",
    email: "",
  });
  const [editting, setEditting] = useState(false);

  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token

  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringMyProfile = async () => {
        const response = await getProfile(passport.token);
        setProfileData(response.data);
        console.log(response);
      };
      bringMyProfile();
    }
  }, []);

  const editButtonHandler = () => {
    setEditData({
      name: profileData.name,
      email: profileData.email,
    });
    setEditting(!editting);
  };

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    console.log("estamos editando en el input");
  };

  useEffect(() => {
    console.log("estamos editando: ", editting);
  }, [editting]);

  const confirmButtonHandler = async () => {
    const response = await updateProfile (editData, passport.token)
    console.log(response)
  }

  return (
    <>
      <h2>Hola, somos profile</h2>
      <p className={editting ? "hidden" : ""}>
        Name: {profileData.name ? profileData.name : "No Disponible"}
      </p>
      <CInput
        type="text"
        name="name"
        placeholder="Name: "
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <p className={editting ? "hidden" : ""}>Email: {profileData.email}</p>
      <CInput
        type="email"
        name="email"
        placeholder={editData.email}
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <CInput
        type="button"
        name="edit"
        value="Edit"
        clickFunction={editButtonHandler}
      />
            <CInput
        type="button"
        name="save"
        value="Save"
        clickFunction={confirmButtonHandler}
      />
    </>
  );
};
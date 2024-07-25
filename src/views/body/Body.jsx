import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Login/Login.jsx'
import { Home } from '../Home/Home.jsx'
import { NotFound } from '../../components/NotFound/NotFound.jsx'
import { Register } from '../Register/Register.jsx'
import { Books } from '../Books/Books.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Admin } from '../Admin/Admin'

export const Body = () => {

  const passport = JSON.parse(localStorage.getItem('passport'));
  let role = null;
  if(passport){
    role = passport.tokenData.role
  }

  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/> }/>
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/profile" element={<Profile/>}/>

        {
        role === 'admin' && <Route path="/admin" element={<Admin/>}/>
        }

    </Routes>
    </>
  )
}

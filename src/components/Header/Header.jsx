import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../CSurfer/CSurfer';
import '../Header/Header.css'

export const Header = () => {

    const navigate = useNavigate();
    

  return (
    <>
    <div className="flex justify-space-betwwen">
        <CSurfer path="/" content="Home"/>
        <CSurfer path="/register" content="Register"/>
        <CSurfer path="/login" content="Login"/>
        <CSurfer path="/services" content="Services"/>
        <CSurfer path="/profile" content="Profile"/>
        <CSurfer path="/books" content="Books"/>
    </div>
    </>
  )
} 

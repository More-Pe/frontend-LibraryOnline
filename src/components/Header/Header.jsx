import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../CSurfer/CSurfer';

export const Header = () => {

    const navigate = useNavigate();

  return (
    <>
    <ul>
        <div onClick={ ()=> navigate("/login") }>Login</div>
        <div onClick={ ()=> navigate("/register")} >Register </div>
        <CSurfer path="/" content="Home"/>
        <CSurfer path="/services" content="Services"/>
    </ul>
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../CSurfer/CSurfer';

export const Header = () => {

    const navigate = useNavigate();

  return (
    <>
    <ul>
        <CSurfer path="/" content="Home"/>
        <CSurfer path="/login" content="Login"/>
        <CSurfer path="/register" content="Register"/>
        <CSurfer path="/services" content="Services"/>
    </ul>
    </>
  )
}

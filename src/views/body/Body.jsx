import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../../components/Login/Login'
import { Home } from '../Home/Home'
import { NotFound } from '../../components/NotFound/NotFound'
import { Register } from '../../components/Register/Register'
import { Services } from '../../components/Services/Services'
export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="*" element={<NotFound/> }/>
        <Route path="/services" element={<Services/>}/>
    </Routes>
    </>
  )
}

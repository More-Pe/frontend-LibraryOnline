import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Home } from '../Home/Home'
import { NotFound } from '../../components/NotFound/NotFound'
import { Register } from '../Register/Register'
import { Services } from '../../components/Services/Services'
import { Books } from '../Books/Books'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="*" element={<NotFound/> }/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/books" element={<Books/>}/>
    </Routes>
    </>
  )
}

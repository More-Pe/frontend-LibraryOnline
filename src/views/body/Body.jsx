import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../../components/Login/Login'
import { Home } from '../Home/Home'
import { NotFound } from '../../components/NotFound/NotFound'
export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="*" element={<NotFound/> }/>
    </Routes>
    </>
  )
}

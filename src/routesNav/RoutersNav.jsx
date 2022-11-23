import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Booking from '../pages/Booking'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import SellCar from '../pages/SellCar'
import Settings from '../pages/Settings'
import Signup from '../pages/Signup'

const RoutersNav = () => {
  return (
    <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Navigate to="/dashboard" element={<Dashboard/>}/>}/>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/sellcar" element={<SellCar />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<h1> Page Not Found 404! </h1>} />
            </Routes>
    </>
  )
}

export default RoutersNav
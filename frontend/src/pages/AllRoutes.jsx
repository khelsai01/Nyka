import React from 'react'
import {Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import Login from './Login'
import Register from './Register'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


    </Routes>
  )
}

export default AllRoutes
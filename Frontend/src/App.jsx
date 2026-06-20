import React, { useState } from 'react'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import { Route,Routes, useNavigate } from 'react-router-dom'

const App = () => {
const[user,setUser] = useState(null);
const[token,setToken] = useState(null);
const navigate = useNavigate();

const clearAuth = ()=>{
  try {
    localStorage.removeItem("user")
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  } catch (err) {
    console.log("ClearAuth error",err);
  }
  setUser(null)
  setToken(null)
}

const handleLogout = () =>{
  clearAuth();
  navigate("/login");
}

  return (
    <>
    <Layout/>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App

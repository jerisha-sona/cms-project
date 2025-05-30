import { Route, Routes } from "react-router-dom";
import React from 'react';  
import Home from "../pages/Home"
import Login from "../pages/Login"; 
import SignUp from "../pages/SignUp";
// import NotFound from "../pages/NotFound";
import About from "../pages/About"; 
import Contact from "../pages/Contact";



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            {/* <Route path="/notfound" element={<NotFound/>} /> */}
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

           


            
            
        </Routes>
    );
}


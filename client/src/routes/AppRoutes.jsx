import { Route, Routes } from "react-router-dom";
// import React from 'react';  
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// import SignIn from "../pages/SignIn";




export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/signin" element={<SignIn/>} /> */}
   

            
            
        </Routes>
    );
}
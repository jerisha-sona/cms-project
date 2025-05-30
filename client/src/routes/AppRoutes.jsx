import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import React from 'react';  
// import Home from "../pages/Home"
import Login from "../pages/Login"; 
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import About from "../pages/About"; 
=======
// import React from 'react';  
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// import SignIn from "../pages/SignIn";

>>>>>>> 0a0fdf658f1121e7ad5ecc0c2dcabcff0482c5fe



export default function AppRoutes() {
    return (
        <Routes>
<<<<<<< HEAD
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/notfound" element={<NotFound/>} />
            <Route path="/about" element={<About/>}/>
           

=======
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/signin" element={<SignIn/>} /> */}
   
>>>>>>> 0a0fdf658f1121e7ad5ecc0c2dcabcff0482c5fe

            
            
        </Routes>
    );
<<<<<<< HEAD
}

=======
}
>>>>>>> 0a0fdf658f1121e7ad5ecc0c2dcabcff0482c5fe

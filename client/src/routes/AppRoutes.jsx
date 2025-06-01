import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import DashboardLayouts from '../layouts/DashboardLayouts';
import BasicLayout from "../layouts/BasicLayout";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Intro from "../pages/dashboard/Intro";
import Portfolio from "../pages/dashboard/Portfolio";
import Travelform from "../pages/dashboard/Travelform";
// import PrivateRoute from './PrivateRoute';

// import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<BasicLayout />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<DashboardLayouts />}>
        <Route index element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="travelform" element={<Travelform />} />
      </Route>
    </Routes>
  );
}

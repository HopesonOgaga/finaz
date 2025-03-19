import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/constanst/home";
import Profile from "./components/dashboard/profile/profile";
import Login from "./components/form/login/login";
import Register from "./components/form/register/register";
import ProfileData from "./components/dashboard/profile/overview/profileData";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route to Home */}
        <Route path="/overview" element={<Profile/>} /> {/* Route to Profile */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/profileData" element={<ProfileData></ProfileData>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

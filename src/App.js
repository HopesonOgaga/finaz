import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/constanst/home";
import Profile from "./components/dashboard/profile/profile";
import Login from "./components/form/login/login";
import Register from "./components/form/register/register";
import ProfileData from "./components/dashboard/profile/overview/profileData";
import SocialMedia from "./components/pages/social";
import CryptoDepositDashboard from "./components/dashboard/crypto dashboard";
function App() {
  const [userData, setUserData] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route to Home */}
        <Route path="/overview" element={<Profile />} />{" "}
        {/* Route to Profile */}
        <Route
          path="/login"
          element={<Login setUserData={setUserData}></Login>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/profileData"
          element={<ProfileData></ProfileData>}
        ></Route>
        <Route path="/social" element={<SocialMedia></SocialMedia>}></Route>
        <Route
          path="/crypto"
          element={
            <CryptoDepositDashboard
              userData={userData}
            ></CryptoDepositDashboard>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

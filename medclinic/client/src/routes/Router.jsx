import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMenu from "../components/header/HeaderMenu.jsx"
import FooterMenu from "../components/footer/FooterMenu.jsx"
import HomePage from "../pages/homepage/HomePage.jsx"
import RegistrationPage from "../pages/registration/RegistrationPage.jsx";
import PatientsListPage from "../pages/patients/PatientsListPage.jsx";


const Router = () => {
    
    return (
        <div>
            <BrowserRouter>
                <HeaderMenu/>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route exact path="/register" element={<RegistrationPage/>}/>
                    <Route exact path="/patients" element={<PatientsListPage/>}/>
                </Routes>
                <FooterMenu/>
            </BrowserRouter>
        </div>
    );
}

export default Router;

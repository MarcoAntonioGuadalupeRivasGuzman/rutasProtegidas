import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Landing } from "../components/Landing";
import { Dashboard } from "../components/Dashboard";
import { Analize } from "../components/Analize";
import { Home } from "../components/Home";

export const RouterApp = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/landing" element={<Landing />}/> 

            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/analize" element={<Analize />} />

        </Routes>
        </BrowserRouter>
    );
}
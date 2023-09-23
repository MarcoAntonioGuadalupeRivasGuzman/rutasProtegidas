import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Landing } from "../components/Landing";
import { Dashboard } from "../components/Dashboard";
import { Analize } from "../components/Analize";
import { Home } from "../components/Home";
import '../../src/App.css';
import { ProtectedRoute } from "../components/ProtectedRoute";

export const RouterApp = ()=>{

    const [user, setUser] = useState(null);

    const login=()=>{
        setUser({
            id: 1,
            name: 'steve'
        })
    }

    const logout=()=>setUser(null);

    return(
        <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link className="link" to="/landing">Landing</Link>
                </li>

                <li>
                    <Link className="link" to="/home">Home</Link>
                </li>

                <li>
                    <Link className="link" to="/login">Login</Link>
                </li>

                <li>
                    <Link className="link"  to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link className="link" to="/analize">Analize</Link>
                </li>
            </ul>
        </nav>
        {
            user ? (<button onClick={logout}>Logout</button>): (<button onClick={login}>Login</button>)
        }
        <Routes>
            <Route index element={<Login />} />

            <Route path="/home" element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />

            <Route path="/landing" element={<Landing />}/> 

            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/analize" element={<Analize />} />

        </Routes>
        </BrowserRouter>
    );
}
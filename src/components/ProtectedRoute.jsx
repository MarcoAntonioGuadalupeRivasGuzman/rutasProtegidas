import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute=({user,children, redirect="/login"})=>{
    if(!user){
        return <Navigate to={redirect} />
    }
    return children;
}
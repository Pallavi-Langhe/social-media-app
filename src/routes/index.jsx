import React, { useCallback, useEffect } from "react";
import { Routes as AppRoutes, Route } from 'react-router-dom';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { useState } from "react";
// import RootLayout from '../layouts/RootLayout';
// import UserProfile from '../pages/UserProfile';



const RootLayout = () => {

    const location = useLocation();
    const navigate = useNavigate();
    
    const authenticateUser = useCallback(async () => {
        const encodedToken = localStorage.getItem("encoded-token");
        if (encodedToken) {
            const decodedToken = decodeToken(encodedToken);
            const verifiedToken = isExpired(encodedToken);
            if (decodedToken && verifiedToken) {
                localStorage.setItem('user-id', decodedToken._id);
            } else {
                if(location.pathname !== '/signup'){
                    navigate("/login");
                }
            }
        } else {
            if(location.pathname !== '/signup'){ // because signup page can be accessed without user login
                navigate("/login");
            }
        }
    }, [location.pathname, navigate]);
    
    useEffect(() => {
        authenticateUser();
    }, [authenticateUser]);
    
    return (
        <>
            <Outlet />
        </>
    );
};



function Routes() {
    return (
        <AppRoutes>
            <Route path="/" Component={RootLayout}>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route path="/signup" element={<Signup />} />
            </Route>
        </AppRoutes>
    );
}

export default Routes;
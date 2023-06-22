import React, { useState, useEffect } from "react";
import { Routes as AppRoutes, Route } from 'react-router-dom';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
// import RootLayout from '../layouts/RootLayout';
// import UserProfile from '../pages/UserProfile';



const RootLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const authenticateUser = async () => {
        const encodedToken = localStorage.getItem("encoded-token");
        if (encodedToken) {
            const decodedToken = decodeToken(encodedToken);
            const verifiedToken = isExpired(encodedToken);
            if (decodedToken && verifiedToken) {
                setIsAuthenticated(true);
                localStorage.setItem('user-id', decodedToken._id);
            } else {
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    };


    useEffect(() => {
        authenticateUser();
    }, [location.pathname]);
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
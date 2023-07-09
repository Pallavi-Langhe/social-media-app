import React, { useCallback, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authenticateUser = useCallback(async () => {
    const encodedToken = localStorage.getItem("encoded-token");
    if (encodedToken) {
      const decodedToken = decodeToken(encodedToken);
      const verifiedToken = isExpired(encodedToken);
      if (decodedToken && verifiedToken) {
        // localStorage.setItem("user-id", decodedToken._id);
      } else {
        if (location.pathname !== "/signup") {
          navigate("/login");
        }
      }
    } else {
      if (location.pathname !== "/signup") {
        // because /signup page can be accessed without user login
        navigate("/login");
      }
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-between">
        <Sidebar />
        <Outlet />
        {location.pathname !== "/profile" &&
          location.pathname !== "/settings" && <Suggestions />}
      </div>
    </div>
  );
};

export default Home;

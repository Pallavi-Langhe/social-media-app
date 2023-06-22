import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;

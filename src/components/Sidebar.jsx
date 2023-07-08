import React from "react";
import "../style/SideBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../utils";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar mt-12">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/explore">
          <li>Explore </li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>{" "}
        </Link>
        <Link to="/settings">
          <li>Settings </li>
        </Link>
        <li onClick={() => userLogout(navigate)}>Logout</li>
      </ul>
    </div>
  );
};

// Rest of the code...

export default Sidebar;


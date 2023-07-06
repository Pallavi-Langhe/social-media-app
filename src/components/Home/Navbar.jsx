import React from 'react';
import '../../style/Navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="app-name">ReactSphere</span>
            </div>
            <div className="navbar-center justify-center" >
                <input type="text" placeholder="Search User..." className="search-box" />
            </div>
            <div className="navbar-right">
                <span className="profile-icon">&#x1F464;</span>
            </div>
        </div>
    );
};

export default Navbar;

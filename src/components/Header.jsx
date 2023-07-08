import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4 bg-purple-300 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-xl font-bold">ReactSphere</span>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <input
          type="text"
          placeholder="Search User..."
          className="w-72 px-4 py-2 rounded-xl focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <Link to="/settings">
          <span className="text-2xl">&#x1F464;</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;


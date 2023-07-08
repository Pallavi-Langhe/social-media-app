import React, { useState, useEffect } from "react";
import "../style/Suggestions.scss";

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (response.ok) {
        const data = await response.json();
        console.log(data.users);
        setUsers(data.users);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error occurred while fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="suggestions-body justify-end">
      <h2 className="text-lg font-bold">Suggestions For You</h2>
      <div className="suggestions">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p className="username">{user.username}</p>
            <p className="username">{user._id}</p>
            <button className="follow-button">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;


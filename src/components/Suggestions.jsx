import React, { useState, useEffect } from "react";
import "../style/Suggestions.scss";

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (response.ok) {
        const data = await response.json();
        const allUsers = data.users;
        const currentUserId = localStorage.getItem("user-id");
        const currentUserData = await fetchCurrentUser(currentUserId);
        if (currentUserData) {
          const followingUsers = currentUserData.user.following;
          const filteredUsers = filterUsers(allUsers, followingUsers, currentUserId);
          setUsers(filteredUsers);
        } else {
          console.error("Failed to fetch current user");
        }
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error occurred while fetching users", error);
    }
  };

  const fetchCurrentUser = async (currentUserId) => {
    try {
      const response = await fetch(`/api/users/${currentUserId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.error("Error occurred while fetching current user", error);
      return null;
    }
  };

  const filterUsers = (allUsers, followingUsers, currentUserId) => {
    return allUsers.filter(
      (user) =>
        !followingUsers.find((followingUser) => followingUser.id === user.id) &&
        user.id !== currentUserId
    );
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

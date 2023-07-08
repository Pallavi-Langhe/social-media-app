export const userLogout = (navigate) => {
    localStorage.removeItem("encoded-token");
    localStorage.removeItem("user-id");
    navigate("/login");
  };
  
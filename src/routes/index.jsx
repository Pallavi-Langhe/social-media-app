import { Routes as AppRoutes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../components/Post";
import Explore from "../pages/Explore";
import UserProfile from "../pages/UserProfile";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import Mockman from "mockman-js";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />}>
        <Route index element={<Post />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </AppRoutes>
  );
}

export default Routes;


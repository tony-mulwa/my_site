import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";

import "./App.css";
import Profile from "./pages/profile";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import HeroSection from "./pages/LandingPage/HeroSection"; // Import HeroSection
import LandingPage from "./pages/LandingPage/LandingPage"; // Import LandingPage
import Login from "./pages/Login/Login";
import Dashboard from "./components/Dashboard";
import Settings from "./pages/Settings/Settings";
import Loading from "./utils/Loading";
import UserManagement from "./components/UserManagement";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      navigate("/dashboard"); // Navigate to dashboard on successful login
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Redirect to landing page on logout
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      {/* Route for LandingPage with HeroSection */}
      <Route
        path="/"
        element={
          <LandingPage>
            <HeroSection /> {/* Display HeroSection inside LandingPage */}
          </LandingPage>
        }
      />

      {/* Login route */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* Dashboard route */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Settings route */}
      <Route
        path="/settings"
        element={
          isLoggedIn ? (
            <Settings onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* User Management route */}
      <Route
        path="/usermanagement"
        element={
          isLoggedIn ? (
            <UserManagement onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Redirect any undefined routes */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;

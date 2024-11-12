// src/components/Layout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo file

const Layout = ({ children, onLogout }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarMinimized ? "w-20" : "w-64"
        } bg-gray-800 text-white h-screen flex flex-col shadow-lg transition-width duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          {/* Show logo when expanded, or icon when minimized */}
          <img
            src={logo}
            alt="Logo"
            className={`${isSidebarMinimized ? "hidden" : "h-12 w-auto"}`}
          />
          {/* Minimize/Expand icon */}
          <span
            className="material-icons cursor-pointer text-white"
            onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
          >
            {isSidebarMinimized ? "view_headline" : "close_fullscreen"}
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4">
          <h2
            className={`${
              isSidebarMinimized ? "hidden" : "text-lg font-semibold mb-4"
            }`}
          >
            Navigation
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"
              >
                <span className="material-icons">home</span>
                <span className={`${isSidebarMinimized ? "hidden" : "ml-2"}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/usermanagement"
                className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"
              >
                <span className="material-icons">manage_accounts</span>
                <span className={`${isSidebarMinimized ? "hidden" : "ml-2"}`}>
                  User Management
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"
              >
                <span className="material-icons">settings</span>
                <span className={`${isSidebarMinimized ? "hidden" : "ml-2"}`}>
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLogout();
                }}
                className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"
              >
                <span className="material-icons">logout</span>
                <span className={`${isSidebarMinimized ? "hidden" : "ml-2"}`}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;

// src/components/Dashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo file
import Layout from "../utils/Layout";
const Dashboard = ({ onLogout }) => {
  const [newPerson, setNewPerson] = useState({ name: "", email: "", role: "" });
  const [people, setPeople] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople((prev) => [...prev, newPerson]);
    setNewPerson({ name: "", email: "", role: "" });
  };
  return (
    <Layout onLogout={onLogout}>
      <div className="flex">
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Users
                </h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
                <p className="text-sm text-gray-500 mt-2">
                  ↑ 12% from last month
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Revenue
                </h3>
                <p className="text-3xl font-bold text-green-600">$45,678</p>
                <p className="text-sm text-gray-500 mt-2">
                  ↑ 8% from last month
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Active Projects
                </h3>
                <p className="text-3xl font-bold text-purple-600">23</p>
                <p className="text-sm text-gray-500 mt-2">↓ 2 from last week</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Tasks Completed
                </h3>
                <p className="text-3xl font-bold text-orange-600">789</p>
                <p className="text-sm text-gray-500 mt-2">
                  ↑ 24% from last week
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;

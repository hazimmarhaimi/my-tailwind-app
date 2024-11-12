// src/components/UserManagement.js
import React, { useState } from "react"; // Add useState here
import Layout from "../utils/Layout"; // Import the Layout component
import UserModal from "./UserModal";

const UserManagement = ({ onLogout }) => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User " },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User " },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Manager" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser }, // Assign a new ID
    ]);
  };

  const handleRemoveUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };
  return (
    <Layout onLogout={onLogout}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
          {/* Plus icon for adding a new user */}
          <span
            className="material-icons cursor-pointer relative pr-4 rotate-icon"
            onClick={() => setIsModalOpen(true)}
          >
            add
          </span>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <span
                      className="material-icons text-red-500 cursor-pointer"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
        onAddUser={handleAddUser} // Pass the add user function
      />
    </Layout>
  );
};

export default UserManagement;

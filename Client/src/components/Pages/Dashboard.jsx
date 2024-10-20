import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import { FaTimes, FaUser } from "react-icons/fa";
import Sidebar from "../functional/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-gray-100 mt-16">
      <button
        className="md:hidden fixed top-20 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes /> : <FaUser />}
      </button>

      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
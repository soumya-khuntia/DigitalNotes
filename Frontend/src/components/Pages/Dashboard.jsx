import React, { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-gray-100 mt-16">
      {/* Toggle Sidebar Button (visible on small screens) */}
      <button
        className="md:hidden fixed top-20 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 ${sidebarOpen ? 'top-20' : ''} md:top-0`}>
        <div className="p-4">
          <FaUser className="w-20 h-20 mx-auto text-gray-700" />
        </div>
        <hr className="border-t border-gray-200 my-2" />
        <nav className="mt-8 space-y-4">
          <a href="/profile" className="block py-2 px-6 text-gray-700 hover:bg-blue-200 font-bold text-lg">Profile</a>
          <a href="/notes" className="block py-2 px-6 text-gray-700 hover:bg-yellow-200 font-bold text-lg">Notes</a>
          <a href="/saved-notes" className="block py-2 px-6 text-gray-700 hover:bg-green-200 font-bold text-lg">Saved Notes</a>
          <a href="/logout" className="block py-2 px-6 text-gray-700 hover:bg-red-200 font-bold text-lg">Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h1>
        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea id="bio" name="bio" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
            <input type="text" id="interests" name="interests" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
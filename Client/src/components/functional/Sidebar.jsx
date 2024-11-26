
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaStickyNote, FaBookmark, FaSignOutAlt } from 'react-icons/fa';

import { UserContext } from '../../App';
// import { GlobalContext } from "../context/GlobalState";
import { GlobalContext } from '../../context/GlobalState';
import React, { useState, useEffect, useContext } from "react";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
const Sidebar = ({ sidebarOpen }) => {

    const { currUser, setCurrUser } = useContext(UserContext);
    const navigate = useNavigate(); // Initialize navigate
    const handleLogout = async () => {
        try {
          // Make a logout request to the backend (optional)
          const response = await fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include", // Include credentials if using cookies
          });
    
          if (response.ok) {
            // Clear the user data
            setCurrUser(null);
    
            // Optionally show a toast message
            toast.success("Logged out successfully!");
    
            // Redirect to the login or home page
            navigate("/");
          } else {
            const errorData = await response.json();
            toast.error(errorData.message || "Logout failed.");
          }
        } catch (error) {
          console.error("Error during logout:", error);
          toast.error("An error occurred while logging out.");
        }
    
      }




  return (
    <div
      className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 ${
        sidebarOpen ? 'top-20' : ''
      } md:top-0`}
    >
      <div className="p-4">
        <FaUser className="w-20 h-20 mx-auto text-gray-700" />
      </div>
      <hr className="border-t border-gray-200 my-2" />
      <nav className="mt-8 space-y-4">
        <NavLink
          to="/dashboard/personal-details"
          className={({ isActive }) =>
            `block py-2 px-6 text-gray-700 hover:bg-blue-200 font-bold text-lg ${
              isActive ? 'bg-blue-300' : ''
            }`
          }
        >
          <div className="flex items-center">
            <FaUser className="mr-2" />
            <span className="inline">Profile</span>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/notes"
          className={({ isActive }) =>
            `block py-2 px-6 text-gray-700 hover:bg-yellow-200 font-bold text-lg ${
              isActive ? 'bg-yellow-300' : ''
            }`
          }
        >
          <div className="flex items-center">
            <FaStickyNote className="mr-2" />
            <span className="inline">Notes</span>
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/saved-notes"
          className={({ isActive }) =>
            `block py-2 px-6 text-gray-700 hover:bg-green-200 font-bold text-lg ${
              isActive ? 'bg-green-300' : ''
            }`
          }
        >
          <div className="flex items-center">
            <FaBookmark className="mr-2" />
            <span className="inline">Bookmarks</span>
          </div>
        </NavLink>
        
        {/* <a
            href="/logout"
            className="block py-2 px-6 text-gray-700 hover:bg-red-200 font-bold text-lg"
          >
            <div className="flex items-center">
              <FaSignOutAlt className="mr-2" />
              <button onClick={handleLogout} className="text-white">Logout</button>
            </div>
          </a> */}
          <Link
          to="/logout"
          className="block py-2 px-6 text-gray-700 hover:bg-red-200 font-bold text-lg"

        >
          <div className="flex items-center" onClick={handleLogout}>
            <FaSignOutAlt className="mr-2" />
            <span className="inline" >Logout</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
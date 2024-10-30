import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { GlobalContext } from "../../context/GlobalState";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setCurrUser } = useContext(GlobalContext); // Access setCurrUser from context
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        // mode: "no-cors",
        method: "GET",
        credentials: "include", // Sends cookies with request
      });

      if (response.ok) {
        setCurrUser(null);
        toast.success("You have logged out successfully.");
        navigate("/"); // Redirect to login or home page after logout
      } else {
        const errorData = await response.json();
        toast.error(errorData || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      
      toast.error(error.message ||"An error occurred while logging out.");
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="text-white bg-blue-600 px-4 py-2 rounded-md"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

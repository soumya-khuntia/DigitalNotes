import React, { useState, useRef, useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { GlobalContext } from "../../context/GlobalState";

const SignIn = ({ onLogin, googleLogin,currUser,setCurrUser }) => {
  const [flashMessage, setFlashMessage] = useState(null); // Add flash message state
  const [focusedInput, setFocusedInput] = useState(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate
  // const { setCurrUser } = useContext(GlobalContext); // Access setCurrUser from context

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:8080/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        // Show toast message for error
        toast.error(data.message || "Failed to sign in");
      } else {
        setCurrUser(data.user); // Store user data on successful login
        // Show toast message for success
        // toast.success(data.message || "Welcome back to DigitalNote!");
        navigate("/dashboard", {
          state: {
            flashMessage: {
              type: "success",
              text: "Welcome back to DigitalNote!",
            },
          },
        });
      }

      // Clear inputs
      nameRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      toast.error("Enter valid email or password");
    }
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   onLogin(formData);
  // };
  // const google = () => {
  //   window.open("http://localhost:8080/auth/google", "_self");
  // };

  // useEffect(() => {
  //   // Check for user session on page load if backend uses session or cookies
  //   const fetchUserData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8080/google/callback", { credentials: "include" });
  //       if (res.ok) {
  //         const data = await res.json();
  //         console.log(data);

  //         setCurrUser(data.user);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch user data:", err);
  //     }
  //   };
  //   fetchUserData();
  // }, [setCurrUser]);

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const userData = urlParams.get("user");
  //   console.log(urlParams);
  //   console.log(userData);
    
    
  
  //   if (userData) {
  //     const parsedUser = JSON.parse(userData);
  //     setCurrUser(parsedUser); // Set `currUser` context with parsed user data
  //     toast.success("Welcome to DigitalNote!");  // Show success message using toast
  //     navigate("/", { replace: true }); // Navigate to home or another route if needed
  //   }
  // }, [setCurrUser,, navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <IoMdClose size={24} />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Sign In
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="text"
              id="username"
              ref={nameRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("username")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="username"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "username" ||
                (nameRef.current && nameRef.current.value)
                  ? "text-xs text-blue-500 top-[-0.5rem] bg-white px-1"
                  : "text-sm text-gray-700 top-2"
              }`}
            >
              Email
            </label>
          </div>
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="password"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "password" ||
                (passwordRef.current && passwordRef.current.value)
                  ? "text-xs text-blue-500 top-[-0.5rem] bg-white px-1"
                  : "text-sm text-gray-700 top-2"
              }`}
            >
              Password
            </label>
          </div>
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center items-center space-x-4 mb-3 sm:mb-4">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              Sign In
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              <Link to="/signup">Create Account</Link>
            </button>
          </div>
        </form>
        <div className="mt-3 sm:mt-4 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-2 text-gray-700 text-sm">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <div className="mt-3 sm:mt-4 flex justify-center" onClick={googleLogin}>
          <button className="w-44 py-2 border border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            <FcGoogle className="mr-2" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SignUp from "./SignUp";

const SignIn = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleCreateAccount = () => {
    setShowSignUp(true);
  };

  if (showSignUp) {
    return <SignUp />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <IoMdClose size={24} />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Sign In</h2>
        <form>
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "email" || (emailRef.current && emailRef.current.value)
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
                focusedInput === "password" || (passwordRef.current && passwordRef.current.value)
                  ? "text-xs text-blue-500 top-[-0.5rem] bg-white px-1"
                  : "text-sm text-gray-700 top-2"
              }`}
            >
              Password
            </label>
          </div>
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
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
              onClick={handleCreateAccount}
              className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-3 sm:mt-4 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-2 text-gray-700 text-sm">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <div className="mt-3 sm:mt-4 flex justify-center">
          <button className="w-52 py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            <FaGoogle className="mr-2" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
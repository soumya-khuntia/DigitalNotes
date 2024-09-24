import React, { useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const SignUp = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: cpasswordRef.current.value
    };
    console.log(formData);

    // Clear inputs
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    cpasswordRef.current.value = '';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <IoMdClose size={24} />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="text"
              id="name"
              ref={nameRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="name"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "name" || (nameRef.current && nameRef.current.value)
                  ? "text-xs text-blue-500 top-[-0.5rem] bg-white px-1"
                  : "text-sm text-gray-700 top-2"
              }`}
            >
              Username
            </label>
          </div>
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="email"
              id="emailid"
              ref={emailRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("emailid")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="emailid"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "emailid" || (emailRef.current && emailRef.current.value)
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
          <div className="mb-3 sm:mb-4 relative">
            <input
              type="password"
              id="cpassword"
              ref={cpasswordRef}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              placeholder=" "
              required
              onFocus={() => handleFocus("cpassword")}
              onBlur={handleBlur}
            />
            <label
              htmlFor="cpassword"
              className={`absolute left-3 transition-all duration-200 ${
                focusedInput === "cpassword" || (cpasswordRef.current && cpasswordRef.current.value)
                  ? "text-xs text-blue-500 top-[-0.5rem] bg-white px-1"
                  : "text-sm text-gray-700 top-2"
              }`}
            >
              Confirm Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-3 sm:mt-4 flex items-center justify-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-2 text-gray-700 text-sm">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <div className="mt-3 sm:mt-4">
          <button className="w-44 py-2 border border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            <FcGoogle className="mr-2"/>
            Google
          </button>
        </div>
        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-600">
          Already have an account?
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
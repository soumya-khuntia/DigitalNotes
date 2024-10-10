import { useState } from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Forgetpass from "./components/Auth/PasswordReset/Forgetpass";
import EmailCode from "./components/Auth/PasswordReset/EmailCode";
import SetNewpassword from "./components/Auth/PasswordReset/SetNewpassword";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Dashboard from "./components/Pages/Dashboard";

import StarRating from "./components/functional/StarRating";
import AboutUs from "./components/Pages/About";

const handleRatingChange = (newRating) => {
  console.log('New rating:', newRating);
  // You can perform any action with the new rating here
};


function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <Forgetpass/>
      <EmailCode/>
      <SetNewpassword/> */}
      {/* <Contact/> */}
      <AboutUs/>
      <Footer />
    </>
  );
}

export default App;

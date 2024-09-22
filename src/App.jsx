import { useState } from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Forgetpass from "./components/Auth/PasswordReset/Forgetpass";
import EmailCode from "./components/Auth/PasswordReset/EmailCode";
import SetNewpassword from "./components/Auth/PasswordReset/SetNewpassword";

function App() {
  return (
    <>
      <SignUp/>
      <SignIn/>
      <Forgetpass/>
      <EmailCode/>
      <SetNewpassword/>
    </>
  );
}

export default App;

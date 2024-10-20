import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Forgetpass from "./components/Auth/PasswordReset/Forgetpass";
import EmailCode from "./components/Auth/PasswordReset/EmailCode";
import SetNewpassword from "./components/Auth/PasswordReset/SetNewpassword";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/About";

import Dashboard from "./components/Pages/Dashboard";
import PersonalDetails from "./components/functional/PersonalDetails";
import Notes from "./components/functional/Notes";
import SavedNotes from "./components/functional/SavedNotes";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="/dashboard/personal-details" replace />} />
          <Route path="personal-details" element={<PersonalDetails />} />
          <Route path="notes" element={<Notes />} />
          <Route path="saved-notes" element={<SavedNotes />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forget-password" element={<Forgetpass />} />
        <Route path="/email-code" element={<EmailCode />} />
        <Route path="/set-new-password" element={<SetNewpassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

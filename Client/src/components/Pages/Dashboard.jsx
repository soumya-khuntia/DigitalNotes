import React, { useState } from "react";
import {
  FaUser,
  FaTimes,
  FaEdit,
  FaSave,
  FaEnvelope,
  FaIdCard,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
  FaGraduationCap,
  FaCalendarAlt,
  FaStickyNote,
  FaBookmark,
  FaSignOutAlt,
  FaInfoCircle,
} from "react-icons/fa";
import Notes from "../functional/Notes";
import SavedNotes from "../functional/SavedNotes";


const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [regdNo, setRegdNo] = useState("12345678");
  const [phoneNo, setphoneNo] = useState("9457834567");
  const [dob, setDob] = useState("2000-01-01");
  const [gender, setGender] = useState("Male");
  const [branch, setBranch] = useState("CSE");
  const [year, setYear] = useState("1st");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", {
      name,
      email,
      regdNo,
      dob,
      gender,
      phoneNo,
      branch,
      year,
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]  bg-gray-100 mt-16">   
      <button
        className="md:hidden fixed top-20 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes /> : <FaUser />}
      </button>

      <div
        className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 ${sidebarOpen ? "top-20" : ""
          } md:top-0`}
      >
        <div className="p-4">
          <FaUser className="w-20 h-20 mx-auto text-gray-700" />
        </div>
        <hr className="border-t border-gray-200 my-2" />

        <nav className="mt-8 space-y-4">
          <a
            href="/dashboard"
            // onClick={() => setActiveSection("profile")}
            className={`block py-2 px-6 text-gray-700 hover:bg-blue-200 font-bold text-lg ${activeSection === "profile" ? "bg-blue-300" : ""
              }`}
          >
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span className="inline">Profile</span>
            </div>
          </a>
          <a
            href="/dashboard/notes"
            // onClick={() => setActiveSection("notes")}
            className={`block py-2 px-6 text-gray-700 hover:bg-yellow-200 font-bold text-lg ${activeSection === "notes" ? "bg-yellow-300" : ""
              }`}
          >
            <div className="flex items-center">
              <FaStickyNote className="mr-2" />
              <span className="inline">Notes</span>
            </div>
          </a>
          <a
            href="/dashboard/savednotes"
            // onClick={() => setActiveSection("saved-notes")}
            className={`block py-2 px-6 text-gray-700 hover:bg-green-200 font-bold text-lg ${activeSection === "saved-notes" ? "bg-green-300" : ""
              }`}
          >
            <div className="flex items-center">
              <FaBookmark className="mr-2" />
              <span className="inline">Saved Notes</span>
            </div>
          </a>
          <a
            href="#"
            className="block py-2 px-6 text-gray-700 hover:bg-red-200 font-bold text-lg"
          >
            <div className="flex items-center">
              <FaSignOutAlt className="mr-2" />
              <span className="inline">Logout</span>
            </div>
          </a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        {activeSection === "profile" && (
          <>
            <h1 className="text-2xl font-bold mb-2 text-center">
              Profile Details
            </h1>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
              <p className="flex flex-col sm:flex-row items-center">
                <FaInfoCircle className="mr-2 mb-2 sm:mb-0" />
                <span className="text-center sm:text-left">Important: Please complete your profile details to access notes specific to your branch and year.</span>
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-12 gap-6 p-8">
                <ProfileField
                  label="Name"
                  value={name}
                  isEditing={isEditing}
                  onChange={setName}
                  type="text"
                  icon={<FaUser className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Email"
                  value={email}
                  isEditing={isEditing}
                  onChange={setEmail}
                  type="email"
                  icon={<FaEnvelope className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Regd. No."
                  value={regdNo}
                  isEditing={isEditing}
                  onChange={setRegdNo}
                  type="text"
                  icon={<FaIdCard className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Phone No."
                  value={phoneNo}
                  isEditing={isEditing}
                  onChange={setphoneNo}
                  type="number"
                  icon={<FaPhone className="mr-2 text-blue-500 transform rotate-180" />}
                />
                <ProfileField
                  label="Date of Birth"
                  value={dob}
                  isEditing={isEditing}
                  onChange={setDob}
                  type="date"
                  icon={<FaBirthdayCake className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Gender"
                  value={gender}
                  isEditing={isEditing}
                  onChange={setGender}
                  type="select"
                  options={["Male", "Female", "Other"]}
                  icon={<FaVenusMars className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Branch"
                  value={branch}
                  isEditing={isEditing}
                  onChange={setBranch}
                  type="select"
                  options={["CSE", "EE", "EEE", "CE", "ME"]}
                  icon={<FaGraduationCap className="mr-2 text-blue-500" />}
                />
                <ProfileField
                  label="Year"
                  value={year}
                  isEditing={isEditing}
                  onChange={setYear}
                  type="select"
                  options={[
                    "1st",
                    "2nd",
                    "3rd",
                    "4th",
                  ]}
                  icon={<FaCalendarAlt className="mr-2 text-blue-500" />}
                />
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={
                    isEditing ? handleSaveProfile : () => setIsEditing(true)
                  }
                  className={`${isEditing
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                    } text-white font-bold py-2 px-4 rounded-full flex items-center`}
                >
                  {isEditing ? (
                    <FaSave className="mr-2" />
                  ) : (
                    <FaEdit className="mr-2" />
                  )}
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Notes Section */}
        {activeSection === "notes" && <Notes branch={branch} year={year} />}

        {/* Saved Notes Section */}
        {activeSection === "saved-notes" && <SavedNotes branch={branch} year={year} />}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, isEditing, onChange, type, options, icon }) => (
  <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
    <div className="font-semibold text-gray-700 flex items-center">
      {icon}
      <span className="inline">{label}</span>
    </div>
    {isEditing ? (
      type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-2 py-1 w-full sm:w-auto"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-2 py-1 w-full sm:w-auto"
        />
      )
    ) : (
      <div className="text-gray-600">{value}</div>
    )}
  </div>
);

export default Dashboard;
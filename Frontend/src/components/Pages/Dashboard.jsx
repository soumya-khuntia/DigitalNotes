import React, { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaEdit, FaSave, FaEye, FaDownload } from 'react-icons/fa';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [selectedNote, setSelectedNote] = useState(null);

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [regdNo, setRegdNo] = useState("12345678");
  const [phoneNo, setphoneNo] = useState("9457834567");
  const [dob, setDob] = useState("2000-01-01");
  const [gender, setGender] = useState("Male");
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("6th");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", { name, email, regdNo, dob, gender, phoneNo, branch, semester });
    setIsEditing(false);
  };

  const handleNoteClick = (index) => {
    setSelectedNote(index);
  };

  const handleCloseNote = () => {
    setSelectedNote(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-gray-100 mt-16">
      <button
        className="md:hidden fixed top-20 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes /> : <FaUser />}
      </button>

      <div className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 ${sidebarOpen ? 'top-20' : ''} md:top-0`}>
        <div className="p-4">
          <FaUser className="w-20 h-20 mx-auto text-gray-700" />
        </div>
        <hr className="border-t border-gray-200 my-2" />
        <nav className="mt-8 space-y-4">
          <a href="#" onClick={() => setActiveSection('profile')} className={`block py-2 px-6 text-gray-700 hover:bg-blue-200 font-bold text-lg ${activeSection === 'profile' ? 'bg-blue-300' : ''}`}>Profile</a>
          <a href="#" onClick={() => setActiveSection('notes')} className={`block py-2 px-6 text-gray-700 hover:bg-yellow-200 font-bold text-lg ${activeSection === 'notes' ? 'bg-yellow-300' : ''}`}>Notes</a>
          <a href="#" onClick={() => setActiveSection('saved-notes')} className="block py-2 px-6 text-gray-700 hover:bg-green-200 font-bold text-lg">Saved Notes</a>
          <a href="/logout" className="block py-2 px-6 text-gray-700 hover:bg-red-200 font-bold text-lg">Logout</a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        {activeSection === 'profile' && (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Profile Details</h1>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-12 gap-6 p-8">
                <ProfileField label="Name" value={name} isEditing={isEditing} onChange={setName} type="text" />
                <ProfileField label="Email" value={email} isEditing={isEditing} onChange={setEmail} type="email" />
                <ProfileField label="Regd. No." value={regdNo} isEditing={isEditing} onChange={setRegdNo} type="text" />
                <ProfileField label="Phone No." value={phoneNo} isEditing={isEditing} onChange={setphoneNo} type="number" />
                <ProfileField label="Date of Birth" value={dob} isEditing={isEditing} onChange={setDob} type="date" />
                <ProfileField
                  label="Gender"
                  value={gender}
                  isEditing={isEditing}
                  onChange={setGender}
                  type="select"
                  options={["Male", "Female", "Other"]}
                />
                <ProfileField
                  label="Branch"
                  value={branch}
                  isEditing={isEditing}
                  onChange={setBranch}
                  type="select"
                  options={["CSE", "EE", "EEE", "CE", "ME"]}
                />
                <ProfileField
                  label="Semester"
                  value={semester}
                  isEditing={isEditing}
                  onChange={setSemester}
                  type="select"
                  options={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]}
                />
              </div>
              <div className="flex justify-center p-4">
                <button
                  onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
                  className={`${isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded-full flex items-center`}
                >
                  {isEditing ? <FaSave className="mr-2" /> : <FaEdit className="mr-2" />}
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </button>
              </div>
            </div>
          </>
        )}
        {activeSection === 'notes' && (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md aspect-square flex items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => handleNoteClick(index)}
                >
                  <span className="text-xl font-semibold text-gray-700">Note {index + 1}</span>
                </div>
              ))}
            </div>
            {selectedNote !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Note {selectedNote + 1}</h2>
                    <button onClick={handleCloseNote} className="text-gray-500 hover:text-gray-700">
                      <FaTimes />
                    </button>
                  </div>
                  <div className="mb-4">
                    <p>This is the content of Note {selectedNote + 1}.</p>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      <FaEye className="mr-2" /> Preview
                    </button>
                    <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                      <FaDownload className="mr-2" /> Download
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, isEditing, onChange, type, options }) => (
  <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
    <div className="font-semibold text-gray-700">{label}</div>
    {isEditing ? (
      type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-2 py-1 w-full sm:w-auto"
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
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
import React, { useContext } from "react";
import { FaUser, FaEdit, FaSave, FaEnvelope, FaIdCard, FaPhone, FaBirthdayCake, FaVenusMars, FaGraduationCap, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';;
  import { useState } from "react";
  import { toast } from "sonner";
  import { GlobalContext } from "../../context/GlobalState";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [activeSection, setActiveSection] = useState("profile");
    const { currUser } = useContext(GlobalContext);
  
    // const [name, setName] = useState("John Doe");
    // const [email, setEmail] = useState("johndoe@example.com");
    // const [regdNo, setRegdNo] = useState("12345678");
    // const [phoneNo, setphoneNo] = useState("9457834567");
    // const [dob, setDob] = useState("2000-01-01");
    // const [gender, setGender] = useState("Male");
    // const [branch, setBranch] = useState("CSE");
    // const [year, setYear] = useState("1st");

    const [username, setUsername] = useState(currUser?.username || "");
    const [email, setEmai] = useState(currUser?.email || "");
    const [regdNo, setRegdNo] = useState(currUser?.regdNo || "");
    const [phoneNo, setPhoneNo] = useState(currUser?.phoneNo || "");
    const [dob, setDob] = useState(currUser?.dob || "");
    const [gender, setGender] = useState(currUser?.gender || "");
    const [branch, setBranch] = useState(currUser?.branch || "");
    const [sem, setSem] = useState(currUser?.sem || "");
    const [year, setYear] = useState(currUser?.year || ""); // New state for year



  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const profileData = { regdno: regdNo, phno: phoneNo, dob, gender, branch, sem };

    try {
      const response = await fetch("http://localhost:8080/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update profile");
      }
    } catch (error) {
      alert("An error occurred while updating the profile.");
    }
  };
  
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
  
    // const ProfileField = ({
    //   label,
    //   value,
    //   isEditing,
    //   onChange,
    //   type,
    //   options,
    //   icon,
    // }) => (
    //   <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
    //     <div className="font-semibold text-gray-700 flex items-center">
    //       {icon}
    //       <span className="inline">{label}</span>
    //     </div>
    //     {isEditing ? (
    //       type === "select" ? (
    //         <select
    //           value={value}
    //           onChange={(e) => onChange(e.target.value)}
    //           className="border rounded px-2 py-1 w-full sm:w-auto"
    //         >
    //           {options.map((option) => (
    //             <option key={option} value={option}>
    //               {option}
    //             </option>
    //           ))}
    //         </select>
    //       ) : (
    //         <input
    //           type={type}
    //           value={value}
    //           onChange={(e) => onChange(e.target.value)}
    //           className="border rounded px-2 py-1 w-full sm:w-auto"
    //         />
    //       )
    //     ) : (
    //       <div className="text-gray-600">{value}</div>
    //     )}
    //   </div>
    // );
  


    const ProfileField = ({ label, value, isEditing, onChange, type, options, icon }) => {
      return (
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
                          <option value="">Select {label}</option>
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
                  <div className="text-gray-600">{value || "Not set"}</div>
              )}
          </div>
      );
  };
  


  return (
    <>
      {/* Profile section */}
      <div className="flex-1 p-8 ">
        {/* {activeSection === "profile" && ( */}

        <h1 className="text-2xl font-bold mb-2 text-center">Profile Details</h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="flex flex-col sm:flex-row items-center">
          <FaExclamationTriangle className="flex-shrink-0 mr-2 mb-2 sm:mb-0 text-yellow-500 text-xl" />
            <span className="text-center sm:text-left">
              Important: Please complete your profile details to access notes
              specific to your branch and year.
            </span>
          </p>
        </div>


        {currUser ? (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-12 gap-6 p-8">
                    <ProfileField
                        label="Name"
                        value={username}
                        isEditing={isEditing}
                        // onChange={setName}
                        type="text"
                        icon={<FaUser className="mr-2 text-green-500" />}
                    />
                    <ProfileField
                        label="Email"
                        value={email}
                        isEditing={isEditing}
                        // onChange={setEmail}
                        type="email"
                        icon={<FaEnvelope className="mr-2 text-red-500" />}
                    />
                    <ProfileField
                        label="Regd. No."
                        value={regdNo}
                        isEditing={isEditing}
                        // onChange={setRegdNo}
                        type="text"
                        icon={<FaIdCard className="mr-2 text-purple-500" />}
                    />
                    <ProfileField
                        label="Phone No."
                        value={phoneNo}
                        isEditing={isEditing}
                        // onChange={setPhoneNo}
                        type="number"
                        icon={<FaPhone className="mr-2 text-blue-500 transform rotate-90" />}
                    />
                    <ProfileField
                        label="Date of Birth"
                        value={dob}
                        isEditing={isEditing}
                        // onChange={setDob}
                        type="date"
                        icon={<FaBirthdayCake className="mr-2 text-pink-500" />}
                    />
                    <ProfileField
                        label="Gender"
                        value={gender}
                        isEditing={isEditing}
                        // onChange={setGender}
                        type="select"
                        options={["Male", "Female", "Other"]}
                        icon={<FaVenusMars className="mr-2 text-indigo-500" />}
                    />
                    <ProfileField
                        label="Branch"
                        value={branch}
                        isEditing={isEditing}
                        // onChange={setBranch}
                        type="select"
                        options={["CSE", "EE", "EEE", "CE", "ME"]}
                        icon={<FaGraduationCap className="mr-2 text-yellow-500" />}
                    />
                    <ProfileField
                        label="Semester"
                        value={sem}
                        isEditing={isEditing}
                        // onChange={setSemester}
                        type="select"
                        options={[
                            "1st",
                            "2nd",
                            "3rd",
                            "4th",
                            "5th",
                            "6th",
                            "7th",
                            "8th",
                        ]}
                        icon={<FaCalendarAlt className="mr-2 text-orange-500" />}
                    />
                </div>
                <div className="flex justify-center p-4">
                    <button
                        onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
                        className={`${isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} text-white font-bold py-2 px-4 rounded-full flex items-center`}
                    >
                        {isEditing ? <FaSave className="mr-2" /> : <FaEdit className="mr-2" />}
                        {isEditing ? "Save Profile" : "Edit Profile"}
                    </button>
                </div>
            </div>
        ) : (
          <p className="lg:text-4xl text-center text-xl text-black font-extrabold">You are not Login!</p>
        )}
        {/* {currUser ? (
        <ProfileUpdateForm initialData={currUser} />
      ) : (
        <p className="lg:text-4xl text-center text-xl text-black font-extrabold">Loading profile data...</p>
      )} */}

{/* <ProfileUpdateForm initialData={currUser} /> */}
        
        {/* <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
              icon={
                <FaPhone className="mr-2 text-blue-500 transform rotate-180" />
              }
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
              options={["1st", "2nd", "3rd", "4th"]}
              icon={<FaCalendarAlt className="mr-2 text-blue-500" />}
            />
          </div>
          <div className="flex justify-center p-4">
            <button
              onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
              className={`${
                isEditing
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
        </div> */}


{/* <form onSubmit={handleUpdateProfile} className="max-w-lg mx-auto p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Regd. No.</label>
        <input
          type="text"
          value={regdNo}
          onChange={(e) => setRegdNo(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Phone No.</label>
        <input
          type="tel"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Branch</label>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="EE">EE</option>
          <option value="EEE">EEE</option>
          <option value="CE">CE</option>
          <option value="ME">ME</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Year</label>
        <select
          value={sem}
          onChange={(e) => setSem(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Year</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
      >
        Save Profile
      </button>
    </form> */}
    

        {/* // )} */}

        {/* Notes Section */}
        {/* {activeSection === "notes" && <Notes branch={branch} year={year} />} */}

        {/* Saved Notes Section */}
        {/* {activeSection === "saved-notes" && <SavedNotes branch={branch} year={year} />} */}
      </div>
    </>
  );
};

export default Profile;

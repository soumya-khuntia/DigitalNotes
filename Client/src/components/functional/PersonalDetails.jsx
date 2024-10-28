import React, { useState, useEffect } from 'react';
import { FaUser, FaEdit, FaSave, FaEnvelope, FaIdCard, FaPhone, FaBirthdayCake, FaVenusMars, FaGraduationCap, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

const PersonalDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("joohndoe@example.com");
    const [regdNo, setRegdNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [branch, setBranch] = useState("");
    const [semester, setSemester] = useState("");
    const [showImportantMessage, setShowImportantMessage] = useState(true);

    const handleSaveProfile = () => {
        console.log("Saving profile:", {
            name,
            email,
            regdNo,
            dob,
            gender,
            phoneNo,
            branch,
            semester,
        });
        setIsEditing(false);
        const allFieldsFilled = name && email && regdNo && phoneNo && dob && gender && branch && semester;
        setShowImportantMessage(!allFieldsFilled);
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2 text-center">Profile Details</h1>
            {showImportantMessage && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 mx-4 sm:mx-0 rounded-r">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center">
                        <FaExclamationTriangle className="flex-shrink-0 mr-2 mb-2 sm:mb-0 text-yellow-500 text-xl" />
                        <p className="font-bold text-sm sm:text-base text-center sm:text-left">Please complete all profile details to access notes specific to your branch and semester.</p>
                    </div>
                </div>
            )}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-12 gap-6 p-8">
                    <ProfileField
                        label="Name"
                        value={name}
                        isEditing={isEditing}
                        onChange={setName}
                        type="text"
                        icon={<FaUser className="mr-2 text-green-500" />}
                    />
                    <ProfileField
                        label="Email"
                        value={email}
                        isEditing={isEditing}
                        onChange={setEmail}
                        type="email"
                        icon={<FaEnvelope className="mr-2 text-red-500" />}
                    />
                    <ProfileField
                        label="Regd. No."
                        value={regdNo}
                        isEditing={isEditing}
                        onChange={setRegdNo}
                        type="text"
                        icon={<FaIdCard className="mr-2 text-purple-500" />}
                    />
                    <ProfileField
                        label="Phone No."
                        value={phoneNo}
                        isEditing={isEditing}
                        onChange={setPhoneNo}
                        type="number"
                        icon={<FaPhone className="mr-2 text-blue-500 transform rotate-90" />}
                    />
                    <ProfileField
                        label="Date of Birth"
                        value={dob}
                        isEditing={isEditing}
                        onChange={setDob}
                        type="date"
                        icon={<FaBirthdayCake className="mr-2 text-pink-500" />}
                    />
                    <ProfileField
                        label="Gender"
                        value={gender}
                        isEditing={isEditing}
                        onChange={setGender}
                        type="select"
                        options={["Male", "Female", "Other"]}
                        icon={<FaVenusMars className="mr-2 text-indigo-500" />}
                    />
                    <ProfileField
                        label="Branch"
                        value={branch}
                        isEditing={isEditing}
                        onChange={setBranch}
                        type="select"
                        options={["CSE", "EE", "EEE", "CE", "ME"]}
                        icon={<FaGraduationCap className="mr-2 text-yellow-500" />}
                    />
                    <ProfileField
                        label="Semester"
                        value={semester}
                        isEditing={isEditing}
                        onChange={setSemester}
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
        </>
    );
};

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

export default PersonalDetails;
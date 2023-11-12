import React, { useEffect, useState } from "react";
import styles from "./PersonalInformation.module.css";

const PersonalInformation = () => {
  //   const [username, setUsername] = useState(
  //     JSON.parse(localStorage.getItem("ForPersonalInfo")).UserName
  //   );
  //   const [email, setEmail] = useState(
  //     JSON.parse(localStorage.getItem("ForPersonalInfo")).Email
  //   );
  //   const [fullName, setFullName] = useState(
  //     JSON.parse(localStorage.getItem("ForPersonalInfo")).FullName
  //   );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [studentId, setStudentId] = useState("");
  const [lecturerId, setLecturerId] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [data, setData] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleLecturerIdChange = (event) => {
    setLecturerId(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const userCurrentLoggedInID = JSON.parse(localStorage.getItem("userData")).ID;
  const API_FETCH = "http://localhost:5071/api/Users/" + userCurrentLoggedInID;
  const accessToken = JSON.parse(localStorage.getItem("userData"))._userData
    .AccessToken;

  const fetchData = async () => {
    try {
      const response = await fetch(API_FETCH, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      const json = await response.json();
      console.log(json);
      localStorage.setItem("ForPersonalInfo", JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const username = localStorage.getItem("ForPersonalInfo")
    ? JSON.parse(localStorage.getItem("ForPersonalInfo")).UserName
    : "";
  const email = localStorage.getItem("ForPersonalInfo")
    ? JSON.parse(localStorage.getItem("ForPersonalInfo")).Email
    : "";

  const [fullName, setFullName] = useState(
    localStorage.getItem("ForPersonalInfo")
      ? JSON.parse(localStorage.getItem("ForPersonalInfo")).FullName
      : ""
  );

  return (
    <div className={styles.container}>
      <h1>Personal Information</h1>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            disabled
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} disabled />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Lecturer">Lecturer</option>
          </select>
        </div>
        {role === "Student" && (
          <div className={styles.formGroup}>
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={handleStudentIdChange}
            />
          </div>
        )}
        {role === "Lecturer" && (
          <div className={styles.formGroup}>
            <label htmlFor="lecturerId">Lecturer ID:</label>
            <input
              type="text"
              id="lecturerId"
              name="lecturerId"
              value={lecturerId}
              onChange={handleLecturerIdChange}
            />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={handleNotesChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;

import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const [studentId, setStudentId] = useState("");
  const [fullName, setFullName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [lecturerId, setLecturerId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // kiểu người dùng (tạm thời)
  const [notes, setNotes] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleFacultyChange = (event) => {
    setFaculty(event.target.value);
  };

  const handleLecturerIdChange = (event) => {
    setLecturerId(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const userData = {
      EmailId: event.target.email.value,
      username: username,
      FullName: fullName,
      Password: password,
      // userType: userType,
      // studentId: studentId,
      // faculty: faculty,
      UserName: username,
      lecturerId: lecturerId,
      Notes: notes,
    };

    try {
      const response = await fetch(
        "http://localhost:5071/api/Login/PostRegisterDetails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // const result = await response.json();
        alert("Sign up successfully");
        // Redirect the user to the login page
        window.location.href = "/signin";
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  useEffect(() => {
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
    }
  }, [password, repeatPassword]);

  return (
    <div>
      <form
        action="/signup"
        onSubmit={handleSignUp}
        method="post"
        className={styles.form}
      >
        <div className={styles.formContainer}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="fullName">
            <b>Full Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
            className={styles.inputText}
          />

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className={styles.inputText}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            className={styles.inputText}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={handlePasswordChange}
            required
            className={styles.inputPassword}
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required
            className={styles.inputPassword}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* <label htmlFor="user-type">
            <b>User Type</b>
          </label>
          <select
            id="user-type"
            name="user-type"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="">Select User Type</option>
            <option value="DTU Student">DTU Student</option>
            <option value="DTU Lecturer">DTU Lecturer</option>
            <option value="Admin">Admin</option>
            <option value="Outsider">
              Outsider (Not DTU's Student or Lecturer)
            </option>
          </select>

          {userType === "DTU Student" && (
            <>
              <label htmlFor="student-id">
                <b>Student ID</b>
              </label>
              <input
                type="text"
                placeholder="Enter Student ID"
                name="student-id"
                value={studentId}
                onChange={handleStudentIdChange}
                required
                className={styles.inputText}
              />

              <label htmlFor="faculty">
                <b>Faculty</b>
              </label>
              <input
                type="text"
                placeholder="Enter Faculty"
                name="faculty"
                value={faculty}
                onChange={handleFacultyChange}
                required
                className={styles.inputText}
              />
            </>
          )}

          {userType === "DTU Lecturer" && (
            <>
              <label htmlFor="lecturer-id">
                <b>Lecturer ID</b>
              </label>
              <input
                type="text"
                placeholder="Enter Lecturer ID"
                name="lecturer-id"
                value={lecturerId}
                onChange={handleLecturerIdChange}
                required
                className={styles.inputText}
              />

              <label htmlFor="faculty">
                <b>Faculty</b>
              </label>
              <input
                type="text"
                placeholder="Enter Faculty"
                name="faculty"
                value={faculty}
                onChange={handleFacultyChange}
                required
                className={styles.inputText}
              />
            </>
          )} */}
          <label htmlFor="notes">
            <b>Notes</b>
          </label>
          <input
            type="text"
            placeholder="Enter Notes"
            name="notes"
            value={notes}
            onChange={handleNotesChange}
            className={styles.inputText}
          />

          <hr />
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </div>
        <p>
          Want to sign in instead? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

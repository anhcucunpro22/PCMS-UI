import React, { useState, useEffect } from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userType, setUserType] = useState('');
  const [studentId, setStudentId] = useState('');
  const [faculty, setFaculty] = useState('');
  const [lecturerId, setLecturerId] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
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

  const handleSignUp = (event) => {
    event.preventDefault();
    const userData = {
      email: event.target.email.value,
      password: event.target.psw.value,
      userType: userType,
      studentId: studentId,
      faculty: faculty,
      lecturerId: lecturerId
    };

    let existingData = JSON.parse(localStorage.getItem('userData'));
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
    existingData.push(userData);
    localStorage.setItem('userData', JSON.stringify(existingData));
    // event.target.reset();
  };

  return (
    <div>
      <form action="/signup" onSubmit={handleSignUp} method="post" className={styles.form}>
        <div className={styles.formContainer}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            className={styles.inputText}
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required className={styles.inputPassword} />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required className={styles.inputPassword} />

          <label htmlFor="user-type"><b>User Type</b></label>
          <select id="user-type" name="user-type" value={userType} onChange={handleUserTypeChange}>
            <option value="">Select User Type</option>
            <option value="DTU Student">DTU Student</option>
            <option value="DTU Lecturer">DTU Lecturer</option>
            <option value="Admin">Admin</option>
            <option value="Outsider">Outsider (Not DTU's Student or Lecturer)</option>
          </select>

          {userType === 'DTU Student' && (
            <>
              <label htmlFor="student-id"><b>Student ID</b></label>
              <input type="text" placeholder="Enter Student ID" name="student-id" value={studentId} onChange={handleStudentIdChange} required className={styles.inputText} />

              <label htmlFor="faculty"><b>Faculty</b></label>
              <input type="text" placeholder="Enter Faculty" name="faculty" value={faculty} onChange={handleFacultyChange} required className={styles.inputText} />
            </>
          )}

          {userType === 'DTU Lecturer' && (
            <>
              <label htmlFor="lecturer-id"><b>Lecturer ID</b></label>
              <input type="text" placeholder="Enter Lecturer ID" name="lecturer-id" value={lecturerId} onChange={handleLecturerIdChange} required className={styles.inputText} />

              <label htmlFor="faculty"><b>Faculty</b></label>
              <input type="text" placeholder="Enter Faculty" name="faculty" value={faculty} onChange={handleFacultyChange} required className={styles.inputText} />
            </>
          )}

          <hr />
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </div>
        <p>Want to sign in instead? <Link to="/signin">Sign in</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
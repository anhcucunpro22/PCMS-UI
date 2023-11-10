import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let userData = {
      FullName: "",
      EmailId: email,
      Password: password,
      Designation: "",
      UserMessage: "",
      AccessToken: "",
    };

    // let jwttoken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI5Zjc3NzVjYy1kODVkLTQ3Y2EtODY0OS0yNzhmNWFjMWQwYmYiLCJpYXQiOiIxMS8xMC8yMDIzIDE6NDI6NTQgUE0iLCJVc2VySWQiOiIwIiwiRGlzcGxheU5hbWUiOiJzdHJpbmciLCJVc2VyTmFtZSI6InN0cmluZyIsIkVtYWlsIjoibmd1eWh1bmcxMjNAZ21haWwuY29tIiwiZXhwIjoxNjk5NjI0Mzc0LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.xaAW4Q2ilL3Wl6Ycphp-SrO0RO_AEcEi-lKJCBETAnw";
    // console.log(userData); // Add this line to log the userData object
    fetch("http://localhost:5071/api/Login/PostLoginDetails", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.UserMessage);
        console.log(result);
        if (result.UserMessage === "Login Success") {
          window.location.href = "/printersList";
        }
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} method="POST" className={styles.form}>
        <div className={styles.formContainer}>
          <h1>Login</h1>
          <p>Please enter your email and password.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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

          {/* <label htmlFor="isAdmin">
            <b>Logged in as an admin?</b>
          </label>
          <input
            type="checkbox"
            id="isAdmin"
            name="isAdmin"
            checked={isAdmin}
            onChange={handleAdminChange}
          /> */}

          <hr />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <p>
            Not yet have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
      {errorMessage}
    </div>
  );
};

export default Login;

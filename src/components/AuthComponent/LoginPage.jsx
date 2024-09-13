import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "../UIComponets/HomePage";
import "./loginSignUI.css"; // Import the CSS file

function AuthPage({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [userEmail, setUserEmail] = useState("@gmail.com"); // User's email
  const [password, setPassword] = useState(""); // Password
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password for sign-up
  const [allData, setAllData] = useState([]); // To store sign-up data
  const [disabledSign, setDisabledSign] = useState(true); // To disable sign-up button if form is invalid
  const [disableLogin, setDisabledLogin] = useState(true); // disabled login 
  const [error, setError] = useState(""); // For displaying error messages
  const navigate = useNavigate(); // React Router's navigation hook

  // save & get  the data in local storage  - >>>>>>>>>>>>>>

  useEffect(() => {
    const data = localStorage.getItem("signUpData");
    if (data) {
      const parsedData = JSON.parse(data);
      setAllData(parsedData);
      console.log("Loaded data from local storage: ", parsedData);
    }
  }, []);

  // Validate for Sign-Up button
  useEffect(() => {
    if (
      userEmail !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabledSign(false);
      setError("");
    } else {
      setDisabledSign(true);
      if (
        password !== confirmPassword &&
        password !== "" &&
        confirmPassword !== ""
      ) {
        setError("Passwords don't match");
      } else {
        setError("");
      }
    }
  }, [userEmail, password, confirmPassword]);

  // Validate for Login button

  useEffect(() => {
    if (userEmail !== "" && password !== "") {
      setDisabledLogin(false);
    } else {
      setDisabledLogin(true);
    }

  }, [userEmail, password])

  const login = () => {
    let userLoginData = {
      email: userEmail,
      password: password
    }
    console.log("@@ login", userLoginData);

   
    // Add your login logic here, e.g., make API call with userEmail and password
  };

  const signUp = () => {
    const signUpData = {
      email: userEmail,
      password: password,
    };

    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("signUpData")) || [];
    // Append new sign-up data
    const updatedData = [...existingData, signUpData];
    // Save updated data back to localStorage
    localStorage.setItem("signUpData", JSON.stringify(updatedData));
    console.log("Sign Up Data:", updatedData);
    setConfirmPassword("");
    setUserEmail("");
    setPassword("");

  };

  const handleRefreshPage = () => {
    window.location.reload();
  };


  return (
    <div className="auth-page">
      {" "}
      <button
        onClick={handleRefreshPage}
        style={{
          cursor: "pointer",
        }}
      >
        {" "}
        Refresh Page{" "}
      </button>{" "}
      <div className="auth-container">
        {" "}
        {isLogin ? (
          <>
            {" "}
            <h1 className="auth-title">Login</h1>{" "}
            {error && <div className="error"> {error}</div>}
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />{" "}
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <button
              className={disableLogin ? "auth-button-bg" : "auth-button"}
              disabled={disableLogin}
              onClick={login}
            >
              {" "}
              Login{" "}
            </button>{" "}
            <button className="switch-button" onClick={() => setIsLogin(false)}>
              {" "}
              Switch to Sign Up{" "}
            </button>{" "}
          </>
        ) : (
          <>
            {" "}
            <h1 className="auth-title">Sign Up</h1>{" "}
            {error && <div className="error"> {error}</div>}
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />{" "}
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <input
              type="password"
              className="auth-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />{" "}
            <button
              className={disabledSign ? "auth-button-bg" : "auth-button"}
              disabled={disabledSign}
              onClick={signUp}
            >
              {" "}
              Sign Up{" "}
            </button>{" "}
            <button className="switch-button" onClick={() => setIsLogin(true)}>
              {" "}
              Switch to Login{" "}
            </button>{" "}
          </>
        )}
      </div>{" "}
    </div>
  );
}

export default AuthPage;

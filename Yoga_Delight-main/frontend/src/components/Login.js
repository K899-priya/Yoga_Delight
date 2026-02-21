import React, { useState, useEffect } from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import App from "../App";  // Corrected path to import App.js

function Login() {
  const [value, setValue] = useState("");  // To store email

  // Check if user email is stored in localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);  // If email exists in localStorage, show App
    }
  }, []); // Empty dependency array to run on component mount

  // Handle the Google sign-in
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);  // Store email in localStorage
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  // Show App if user is logged in, else show the login button
  return (
    <div>
      <h2>Login</h2>
      {value ? (
        <App />  // Show App component if logged in
      ) : (
        <button onClick={handleClick}>Sign In</button>  // Show Google login button
      )}
    </div>
  );
}

export default Login;

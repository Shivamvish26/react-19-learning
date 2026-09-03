import React, { useState } from "react";

export default function LoginValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlelogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("password:", password);
    setEmail("");
    setPassword("");
    setError(false);
    setPasswordError(false);
  };

function handleemail(e) {
    let item = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(item)) {
      setError(true);
    } else {
      setError(false);
    }
    setEmail(item);
  }
  return (
    <>
      <form onSubmit={handlelogin}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleemail}
        />
        {error && <p style={{ color: "red" }}>Please enter the email right</p>}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p style={{ color: "red" }}>Please enter the password right</p>
        )}
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
}

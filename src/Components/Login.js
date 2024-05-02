import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState("");
  const navigate = useNavigate();
  let response;

  const loginSubmit = async (e) => {
    e.preventDefault();
    response = await fetch(`${process.env.REACT_APP_LOCAL_HOST}/Login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      window.alert("Login success");
      navigate("/");
      setEmail("");
      setPassword("");
      setChange("");
      const data = await response.json();
      localStorage.setItem("authKey", data.authKey);
      localStorage.setItem("userId", data.userId);
      window.location.reload();
    } else if (response.status === 400)
      setChange("The login failed try to register or enter valid details");
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="form-container">
        <form onSubmit={loginSubmit}>
          <h3 className="form-heading">Login</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
          <span className="error-text">{change}</span>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setfile] = useState(null);
  const [change, setChange] = useState(false);
  let navigate = useNavigate();

  async function submitHandle(e) {
    if ((name, email, password)) {
      e.preventDefault();

      const formData = new FormData();

      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("file", file);
      let responce2 = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/Register`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (responce2.status === 200) {
        window.alert("registration success");
        setName("");
        setEmail("");
        setPassword("");
        setChange("");
        navigate("/login");
        localStorage.setItem("authKey", await responce2.json());
      } else if (responce2.status === 400) {
        setChange("please enter the all details");
      }
    } else alert("please enter the valid details");
  }

  // console.log(name,email,password);
  return (
    <div className="main-container">
      <NavBar />
      <div className="form-container">
        <form onSubmit={submitHandle}>
          <h3 className="form-heading">Register</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="file-input-container">
            <p className="file-input-holder">
              Click here to select profile image
            </p>
            <input
              type="file"
              placeholder="insert user profile"
              name="file"
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
            />
          </div>
          <button type="submit">Register</button>
          <span className="error-text">{change}</span>
        </form>
      </div>
    </div>
  );
}

export default Register;

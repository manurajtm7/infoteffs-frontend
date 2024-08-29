import { Image } from "lucide-react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Authenticate({ isLogin }) {
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
        `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}/${
          isLogin ? "Login" : "Register"
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (responce2.ok) {
        window.alert("registration success");
        setName("");
        setEmail("");
        setPassword("");
        setChange("");
        navigate("/");
        const response = await responce2.json();
        localStorage.setItem("authKey", response.authKey);
        localStorage.setItem("userId", response.userId);
      } else if (responce2.status === 400) {
        setChange("please enter the all details");
      }
    } else alert("please enter the valid details");
  }

  return (
    <form
      onSubmit={submitHandle}
      className="w-full md:w-1/4 flex flex-col gap-4 items-center justify-center"
    >
      <h3 className="text-tcolor text-xl font-medium">Account</h3>
      {!isLogin && (
        <div className="w-[90%] h-14 text-tcolor bg-transparent border border-zinc-700  px-4 grid place-items-center outline-none rounded-md relative">
          <p className="text-tcolor text-xs flex gap-3 items-center justify-center">
            <Image />
            profile image
          </p>
          <input
            type="file"
            placeholder="insert user profile"
            name="file"
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
            className=" opacity-0 absolute left-0 bottom-0"
          />
        </div>
      )}
      {!isLogin && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-[90%] h-10 text-tcolor bg-transparent border border-zinc-700  px-4 outline-none rounded-md"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-[90%] h-10 text-tcolor bg-transparent border border-zinc-700  px-4 outline-none rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-[90%] h-10 text-tcolor bg-transparent border border-zinc-700  px-4 outline-none rounded-md"
      />

      <button
        type="submit"
        className="w-[90%] min-h-10  text-tcolor bg-primary rounded-md"
      >
        {isLogin ? "Login" : "Register"}
      </button>
      <span className="error-text">{change}</span>
    </form>
  );
}

export default Authenticate;

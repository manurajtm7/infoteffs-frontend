import { Image } from "lucide-react";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import LoadingAnimationThree from "../../../loaders/loading-animation-three/LoadingAnimationThree";
import { toast } from "react-toastify";
const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;
function Authenticate({ isLogin }) {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setfile] = useState(null);
  const [change, setChange] = useState(false);

  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function submitHandle(e) {
    if ((name, email, password)) {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();

      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      file && formData.set("file", file);
      let responce2 = await fetch(
        `${productionUrl}/${isLogin ? "Login" : "Register"
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (responce2.ok) {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setChange("");

        navigate("/");
        const response = await responce2.json();
        localStorage.setItem("authKey", response.authKey);
        localStorage.setItem("userId", response.userId);
      } else {
        toast.error(
          isLogin
            ? "Please check your email or password"
            : "Email already exist or please check you internet connection"
        );
        setLoading(false);
      }
    } else toast.error("Please add valid details");
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
        className="w-[90%] min-h-10  text-tcolor bg-primary rounded-md grid place-items-center"
      >
        {loading ? <LoadingAnimationThree /> : isLogin ? "Login" : "Register"}
      </button>
      <span className="error-text">{change}</span>
      <span className="text-sm text-zinc-500">{isLogin ? <Link to={"/auth/register"}>Not have an account?  <span className="text-blue-300">register</span></Link> : <Link to={"/auth/login"}>Already have an account? <span className="text-blue-300">login</span></Link>}</span>
    </form>
  );
}

export default Authenticate;

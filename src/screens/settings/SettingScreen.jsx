import { Earth, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SettingScreen() {
  const authKey = localStorage.getItem("authKey");
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("authKey");
    window.location.reload();
  };
  return (
    <div className="w-full h-screen text-tcolor gradient-2 grid items-start justify-items-center">
      <div className="w-[85%] md:w-1/3 h-4/5 md:ml-2 md:mt-4">
        <div className="w-full ">
          <h1>Settings</h1>
        </div>

        {!(authKey && userId) ? (
          <ul className="text-lg text-primary h-1/5  flex gap-5   items-center justify-center">
            <li>
              <Link to={"/auth/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
          </ul>
        ) : (
          <div className="text-xs mt-5 flex flex-col gap-2 items-start ">
            <button className=" text-red-500 rounded" onClick={handleLogout}>
              Logout
            </button>
            <button className=" text-red-500 rounded" onClick={handleLogout}>
              Delete Account
            </button>

            <div className="mt-5">
              <h4>Credits</h4>
              <div className=" text-xs  mt-1 flex gap-1 flex-col">
                <p className="opacity-50">
                  Developed and maintained by terox -gt services
                </p>
                <p className="text-primary opacity-70 flex gap-1 items-center justify-start">
                  <Mail size={14} />
                  <a href="mailto:it.developer.manuraj@gmail.com">
                    it.developer.manuraj@gmail.com
                  </a>
                </p>
                <p className="text-primary opacity-70 flex gap-1 items-center justify-start">
                  <Earth size={14} />
                  <a href="https://manurajtmio.netlify.app">
                    manurajtmio.netlify.app
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h1>About</h1>
              <p className="text-xs mt-1 opacity-30 text-justify">
                Fullstack blogging and personal social media application.
                Created using MERN stack , This web application may crash
                becuase of it is incompleted development, i'm continuously
                upgrading and updating to get its full fucntionallity. If anyone
                having trouble with this web app please feel free to contact
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingScreen;

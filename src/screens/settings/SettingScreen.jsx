import React, { useState } from "react";
import { Link } from "react-router-dom";

function SettingScreen() {
  const [toggle, setToggle] = useState(window.innerWidth > 500 ? true : false);
  const authKey = localStorage.getItem("authKey");
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("authKey");
    window.location.reload();
  };
  return (
    <div className="w-full h-screen text-tcolor gradient-2 grid items-start justify-items-center">
      <div className="w-[85%] h-4/5 ">
        <div className="w-full  ">
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
          <div>
            <button
              className="w-32 h-10 text-red-500 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingScreen;

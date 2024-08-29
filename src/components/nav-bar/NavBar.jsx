import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grip, Squirrel } from "lucide-react";

function NavBar() {
  const [toggle, setToggle] = useState(window.innerWidth > 500 ? true : false);
  const authKey = localStorage.getItem("authKey");

  const handleLogout = () => {
    localStorage.removeItem("authKey");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap gradient py-4 lg:px-12 shadow ">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid  pb-1 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-tcolor mr-16">
          <span className="font-semibold text-xl tracking-tight flex gap-2">
            <Squirrel className="text-primary" /> Infoteffs
          </span>
        </div>
        <div
          className="block lg:hidden "
          onClick={() => setToggle((pr) => !pr)}
        >
          <button
            id="nav"
            className="flex items-center px-3 py-2  rounded text-tcolor  hover:text-blue-700 hover:border-blue-700"
          >
            <Grip />
          </button>
        </div>
      </div>

      <div
        style={toggle ? { display: "flex" } : { display: "none" }}
        className="menu w-full flex flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
      >
        <div className="text-md  text-zinc-400 lg:flex-grow">
          <NavLink
            to={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded  mr-2"
          >
            Home
          </NavLink>
          <NavLink
            to={"/user/profile"}
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded  mr-2"
          >
            Profile
          </NavLink>
          <NavLink
            to={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded  mr-2"
          >
            Settings
          </NavLink>
        </div>

        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="border border-zinc-700  gradient h-10 pl-2 pr-8 rounded-lg text-sm outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-2"
          ></button>
        </div>
        <div>
          {!authKey ? (
            <div className="flex ">
              <NavLink
                to={"/auth/register"}
                className="block text-md px-4 py-2 rounded text-blue-700 ml-2  hover:text-white mt-4  lg:mt-0"
              >
                Sign in
              </NavLink>

              <NavLink
                to={"/auth/login"}
                className=" block text-md px-4  ml-2 py-2 rounded text-blue-700  hover:text-white mt-4  lg:mt-0"
              >
                login
              </NavLink>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="text-tcolor bg-red-500 rounded-full ml-4 px-5 p-1"
            >
              logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, PlusCircleIcon, UserCircle } from "lucide-react";

function NavBar() {
  return (
    <nav className="w-full h-16 bg-transparent backdrop-blur-xl fixed bottom-0 z-[60] grid place-items-center ">
      <ul className="w-[90%] md:w-1/3 h-full text-tcolor flex items-center justify-around">
        <NavLink to={"/"}>
          <Home size={30} />
        </NavLink>

        <NavLink to={"/post/upload"}>
          <PlusCircleIcon size={30} />
        </NavLink>

        <NavLink to={"/user/profile"}>
          <UserCircle size={30} />
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;

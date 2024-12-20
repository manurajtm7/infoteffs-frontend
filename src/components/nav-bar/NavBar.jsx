import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Images, PlusCircleIcon, Search, UserCircle } from "lucide-react";

function NavBar() {


  return (
    <nav className="w-full h-16 gradient-2 backdrop-blur-xl fixed bottom-0 z-[60] grid place-items-center ">
      <ul className="w-[90%] md:w-1/3 h-full text-tcolor flex items-center justify-around">
        <NavLink to={"/"}>
          <Home size={23} />
        </NavLink>

        <NavLink to={"/user/feeds"}>
          <Images size={23} />
        </NavLink>

        <NavLink to={"/post/upload"}>
          <PlusCircleIcon size={23} />
        </NavLink>

        <NavLink to={"/peoples"}>
          <Search size={23} />
        </NavLink>

        <NavLink to={"/user/profile"}>
          <UserCircle size={23} />
        </NavLink>

      </ul>
    </nav>
  );
}

export default NavBar;

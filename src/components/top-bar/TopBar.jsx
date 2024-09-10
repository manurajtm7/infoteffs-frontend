import { Settings, Squirrel, UserCircleIcon } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 text-tcolor gradient-2 grid place-items-center">
      <div className="w-[86%] md:w-1/3 h-full flex items-center justify-between">
        <NavLink
          to={"/"}
          className="font-medium flex gap-2 items-center justify-center"
        >
          <Squirrel /> Infoteffs
        </NavLink>
        <Settings size={20} onClick={() => navigate("/user/settings")} />
      </div>
    </div>
  );
}

export default TopBar;

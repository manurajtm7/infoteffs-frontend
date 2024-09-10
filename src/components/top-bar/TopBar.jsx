import { Squirrel, UserCircleIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 text-tcolor gradient-2 grid place-items-center">
      <div className="w-[86%] md:w-1/3 h-full flex items-center justify-between">
        <h1 className="font-medium flex gap-2 items-center justify-center">
          <Squirrel /> Infoteffs
        </h1>
        <UserCircleIcon size={30} onClick={() => navigate("/user/profile")} />
      </div>
    </div>
  );
}

export default TopBar;

import React from "react";
import { ProfileImage } from "../../../constants";

function UserProfileImageCard({ image, name }) {
  return (
    <div className="w-full xs:h-40  text-tcolor p-4  flex gap-5 items-center justify-start overflow-hidden">
      <div className="border-2 border-pink-600  rounded-full overflow-hidden ">
        <img
          src={image || ProfileImage}
          alt="user profile"
          className="w-24 h-24  p-3 object-cover"
        />
      </div>
      <div>
        <h1 className=" text-lg font-medium capitalize ">{name || "test pass"}</h1>
        <p>tags</p>
      </div>
    </div>
  );
}

export default UserProfileImageCard;

import React from "react";
import { ProfileImage } from "../../../constants";
import { Edit, X } from "lucide-react";

function UserProfileImageCard({ image, name, tags, isEdit, setIsEdit }) {
  return (
    <div className="w-full xs:h-40  text-tcolor p-4  flex gap-5 items-center justify-start overflow-hidden">
      <div className="min-w-max border-2 border-pink-600  rounded-full overflow-hidden ">
        <img
          src={image || ProfileImage}
          alt="user profile"
          className="w-20 h-20  p-3 object-cover"
        />
      </div>
      <div className="flex gap-4 items-start">
        <div>
          <h1 className="text-lg font-medium capitalize ">
            {name || "test pass"}
          </h1>
          <p className="text-xs">{tags}</p>
        </div>
        {isEdit ? (
          <X size={20} onClick={() => setIsEdit((prev) => !prev)} />
        ) : (
          <Edit size={20} onClick={() => setIsEdit((prev) => !prev)} />
        )}
      </div>
    </div>
  );
}

export default UserProfileImageCard;

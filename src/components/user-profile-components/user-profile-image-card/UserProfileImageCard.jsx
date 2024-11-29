import React, { useState } from "react";
import { ProfileImage } from "../../../constants";
import { Edit, PenBoxIcon, X } from "lucide-react";
import { ProfileImageUpdate } from "../../index";

function UserProfileImageCard({ image, name, tags, isEdit, setIsEdit, DoesEdit }) {

  const [isProfileUpdateActive, setIsProfileUpdateAtive] = useState(false)
  return (
    <div className="w-full xs:h-40  text-tcolor p-4  flex gap-5 items-center justify-start overflow-hidden ">
      {
        (isProfileUpdateActive && DoesEdit) && (
          <ProfileImageUpdate image={image} isActive={isProfileUpdateActive} setIsAtive={setIsProfileUpdateAtive} />
        )
      }
      <div
        onClick={() => setIsProfileUpdateAtive(prev => !prev)}
        className="min-w-max border-2 border-zinc-900 p-2   rounded-full overflow-hidden relative ">
        <img
          src={image || ProfileImage}
          alt="user profile"
          className="w-20 h-20 rounded-full   object-cover"
        />

        {
          DoesEdit &&
          <div className="w-full  h-full bg-black  bg-opacity-80 p-2 grid justify-items-center absolute left-0 top-[70%]">
            <PenBoxIcon size={15} />
          </div>
        }
      </div>
      <div className="flex gap-4 items-start">
        <div>
          <h1 className="text-lg font-medium capitalize ">
            {name || "test pass"}
          </h1>
          <p className="text-xs">{tags}</p>
        </div>

        {
          DoesEdit && (
            isEdit ? (
              <X size={20} onClick={() => setIsEdit((prev) => !prev)} />
            ) : (
              <Edit size={20} onClick={() => setIsEdit((prev) => !prev)} />
            )
          )
        }
      </div>
    </div>
  );
}

export default UserProfileImageCard;

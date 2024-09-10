import { ImagePlusIcon, UserCircleIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function UploadPost() {
  const navigate = useNavigate();
  return (
    <div className="w-full text-tcolor  p-2 py-5 grid place-items-center">
      <div className="w-[90%] md:w-1/3 flex  items-center  gap-5">
        <ImagePlusIcon size={30} onClick={() => navigate("/post/upload")} />
        <span className="text-sm opacity-70">add post</span>
      </div>
    </div>
  );
}

export default UploadPost;

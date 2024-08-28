import React, { useState } from "react";
import { ProfileImage } from "../../constants";
import { Heart, MessageCircle, Share2, Trash2 } from "lucide-react";

function PostCard({
  _id,
  postName,
  content,
  src,
  image,
  like,
  user,
  date,
  isProfileView,
}) {
  const [liked, setLiked] = useState(false);
  const productionUrl = "http://localhost:4000";

  const handleDeletePost = async () => {
    const authKey = localStorage.getItem("authKey");
    const userId = localStorage.getItem("userId");

    const response = await fetch(`${productionUrl}/user/post/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        postId: _id,
        authKey,
        userId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.alert(`The post is deleted successfully`);
    } else {
      window.alert("error occured , try agin later");
    }
  };
  return (
    <div className="w-full h-max text-tcolor mt-3">
      <div className="w-full text-sm border-b border-zinc-700 py-3 flex gap-3 items-center relative ">
        <img
          src={user?.image || ProfileImage}
          alt="user image"
          className="w-8 h-8 p-2 border border-blue-800 rounded-full object-cover"
        />
        <p>{user?.name}</p>
        <p className="text-xs opacity-45 truncate">
          {new Date(date).toDateString()}
        </p>

        {isProfileView && (
          <Trash2
            className=" text-red-900 absolute  right-5"
            onClick={handleDeletePost}
          />
        )}
      </div>

      {image && (
        <div className="w-full h-max mt-5">
          <img src={image} alt="post image" />
        </div>
      )}

      <div className=" py-3 px-2 flex gap-4">
        <Heart
          onClick={() => setLiked((pre) => !pre)}
          fill={liked && "red"}
          color={liked ? "red" : "white"}
        />
        <MessageCircle />
        <Share2 />
      </div>
      <div className="py-1 px-2">
        <h3 className="text-xs font-medium">{postName}</h3>
        <p className="text-xs opacity-60 ">{content?.toString()}</p>
      </div>
    </div>
  );
}

export default PostCard;

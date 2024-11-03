import React, { useEffect, useState } from "react";
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
  likes,
  setChanges,
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes?.length);
  const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;

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
      setChanges((prev) => !prev);
    } else {
      window.alert("error occured , try agin later");
    }
  };

  const handleLikeState = async (e) => {
    setLiked((prev) => !prev);
    try {
      await fetch(`${productionUrl}/like`, {
        method: "POST",
        body: JSON.stringify({
          postId: _id,
          likeState: liked,
          userId: localStorage.getItem("userId"),
        }),
        headers: { "Content-Type": "application/json" },
      });


    } catch (err) {
      alert(err);
    }
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  };

  useEffect(() => {
    likes?.includes(localStorage.getItem("userId"))
      ? setLiked(true)
      : setLiked(false);
  }, []);

  return (
    <div
      className="w-full h-max text-tcolor mt-3"
      onDoubleClick={handleLikeState}
    >
      <div className="w-full text-sm border-b border-zinc-700 py-3 px-5 flex gap-3 items-center relative ">
        <img
          src={user?.image || ProfileImage}
          alt="user image"
          className="w-9 h-9  border border-zinc-800 rounded-full object-cover"
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

      <div className=" py-3 px-5 flex gap-4">
        <div className="flex gap-1">
          <Heart
            onClick={handleLikeState}
            fill={liked && "red"}
            color={liked ? "red" : "white"}
          />
          <p className="text-white">{likeCount}</p>
        </div>
        <MessageCircle />
        <Share2 />
      </div>
      <div className="py-1 px-5">
        <h3 className="text-xs font-medium">{postName}</h3>
        <p className="text-xs opacity-60 ">{content?.toString()}</p>
      </div>
    </div>
  );
}

export default PostCard;

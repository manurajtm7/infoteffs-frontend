import React, { useEffect, useRef, useState } from "react";
import { ProfileImage } from "../../constants";
import { Heart, MessageCircle, Share2, Trash2 } from "lucide-react";
import CommentBox from "../comment-section-box/CommentBox";
import { useNavigate } from "react-router-dom";


const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;

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
  doesEdit
}) {
  const [liked, setLiked] = useState(false);
  const [likedAnim, setLikedAnim] = useState(false);
  const [likeCount, setLikeCount] = useState(likes?.length);
  const [hidden, setHidden] = useState(false);
  const commentRef = useRef(null);
  const navigate = useNavigate();




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

  const handleLikeState = async () => {
    setLiked((prev) => !prev);

    if (!liked) {
      setLikedAnim(true);
      setTimeout(() => {
        setLikedAnim(false)
      }, 1000)
    }

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

  useEffect(() => {
    commentRef?.current?.scrollIntoView();
  }, [hidden])

  return (
    <div
      className="w-full h-max text-tcolor mt-3"
      onDoubleClick={handleLikeState}
    >
      <div className="w-full text-sm border-b border-zinc-700 py-3 px-5 flex gap-3 items-center relative cursor-pointer active:scale-105 transition-all "
        onClick={() => {
          setTimeout(() => { navigate(`/user/profile/:${user?._id}`) }, 150)
        }}
      >
        <img
          src={user?.image || ProfileImage}
          alt="user image"
          className="w-9 h-9  border border-zinc-800 rounded-full object-cover"
        />

        <p>{user?.name}</p>
        <p className="text-xs opacity-45 truncate">
          {new Date(date).toDateString()}
        </p>

        {(isProfileView && doesEdit) && (
          <Trash2
            className=" text-red-900 absolute  right-5"
            onClick={handleDeletePost}
          />
        )}
      </div>

      {image && (
        <div className="w-full h-max mt-5 relative">
          <img src={image} alt="post image" />
          {
            likedAnim && (
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-opacity ">
                <Heart className="shadow-xs animate-pop-in" size={120} fill="white" />
              </div>
            )
          }
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
        <MessageCircle onClick={() => setHidden(!hidden)} />
        <Share2 />
      </div>
      <div className="py-1 px-5">
        <h3 className="text-xs font-medium">{postName}</h3>
        <p className="text-xs opacity-60 ">{content?.toString()}</p>
      </div>
      {
        hidden && (
          <CommentBox hidden={hidden} postId={_id} ref={commentRef} />
        )
      }
    </div>
  );
}

export default PostCard;

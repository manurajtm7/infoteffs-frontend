import React from "react";

function CommentBox() {
  return (
    <div className="w-full h-full gradient ">
      <h1>Comments</h1>
      <div>
        <div>
          <div className="w-full text-sm border-b border-zinc-700 py-3 flex gap-3 items-center ">
            <img
              src={user?.image || ProfileImage}
              alt="user image"
              className="w-8 h-8 p-2 border border-blue-800 rounded-full object-cover"
            />
            <p>{user?.name}</p>
            <p className="text-xs opacity-45 truncate">{date}</p>
          </div>
          <p>hey...</p>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;

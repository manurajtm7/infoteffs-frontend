import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function CreatePost() {
  let [postName, setPostName] = useState("");
  let [content, setContent] = useState("");
  let navigate = useNavigate();

  let onPostSubmit = async () => {
    if (!!(postName && content)) {
      const authKey = localStorage.getItem("authKey");
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/Create`,
        {
          method: "POST",
          body: JSON.stringify({ postName, content, authKey, userId }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        window.alert(`The blog is created successfully`);
        setPostName("");
        setContent("");
        navigate("/");
      } else {
        window.alert("error occured , try agin later");
      }
    } else window.alert("please add some contents");
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="post-container">
        <div className="post-heading">
          <h3>create your post</h3>
        </div>
        <section className="post-input-section">
          <input
            className="post-head-input"
            placeholder="Name your post"
            value={postName}
            onChange={(e) => {
              setPostName(e.target.value);
            }}
          />
          <textarea
            className="post-content-input"
            placeholder="Write about your post"
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </section>
        <div className="button-container">
          <button className="post-upload" onClick={onPostSubmit}>
            Save your post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

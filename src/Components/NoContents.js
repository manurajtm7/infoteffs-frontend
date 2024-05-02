import React from "react";
import { Link } from "react-router-dom";
// import CreatePost from "./CreatePost";

function NoContents() {
  return (
    
    <button className="add-post-container">
      <Link to='/Create' className="Create-post-btn">+</Link>
    </button>
  
  );
}

export default NoContents;

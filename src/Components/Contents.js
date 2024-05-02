import likeImg from "./images/like.png";
import disLike from "./images/dislike.png";
import { useState } from "react";

function Contents({
  _id,
  postName,
  content,
  src,
  like,
  user,
  date,
  setChange,
}) {
  const [likeState, setLikeState] = useState(false);

  async function likeAdd() {
    setLikeState((prev) => !prev);
    setChange((prev) => !prev);
    const response = await fetch(`${process.env.REACT_APP_LOCAL_HOST}/like`, {
      method: "POST",
      body: JSON.stringify({ postId: _id, likeState: likeState }),
      headers: { "Content-Type": "application/json" },
    });
  }
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const _date = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-Us", dateOptions);
  const formattedDate = formatter.format(_date);
  return (
    <div className="content-set">
      <div className="contents">
        <div className="images-container">
          <img
            src={user?.image || src}
            className="image-set"
            alt="image not rendered"
          />
        </div>
        <div className="information-container">
          <h3 className="info-heading">{postName}</h3>
          <p className="information-set-para">{content}</p>
          <button className="like-btn-container" onClick={likeAdd} title="like">
            <img src={!likeState ? likeImg : disLike} className="like-btn" />
          </button>
          <span key={like} className="like-count">
            {" "}
            likes {like}
          </span>
          <span className="user-name">
            {" "}
            Post by <span>{user.name}</span>
          </span>
          <span className="user-name">
            {" "}
            on <span className="date-section">{formattedDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contents;

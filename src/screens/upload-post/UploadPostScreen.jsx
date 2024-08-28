import { Image, ImagePlusIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPostScreen() {
  let [postName, setPostName] = useState("");
  let [content, setContent] = useState("");
  let [image, setImage] = useState({});
  const [preview, setPreview] = useState(null);

  let navigate = useNavigate();


  const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;
  let onPostSubmit = async () => {
    if (!!(postName && content)) {
      const authKey = localStorage.getItem("authKey");
      const userId = localStorage.getItem("userId");

      const formData = new FormData();
      formData.append("image", image);
      formData.append("postName", postName);
      formData.append("content", content);
      formData.append("authKey", authKey);
      formData.append("userId", userId);

      const response = await fetch(`${productionUrl}/Create`, {
        method: "POST",
        body: formData,
      });
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
    <div className="w-full h-screen text-tcolor gradient-2 grid  justify-items-center">
      <div className="w-[90%] flex flex-col gap-4">
        <div className="text-start ">
          <h3 className="text-lg font-medium">upload</h3>
        </div>
        <form className="w-full h-4/5  flex gap-5 flex-col">
          {!!preview && (
            <div>
              <img src={preview} className="rounded-md" />
            </div>
          )}
          <div className="w-full h-16 border rounded-lg flex gap-4 items-center justify-center  relative">
            <label>select post image</label>
            <ImagePlusIcon size={30} />
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                  setPreview(fileReader.result);
                };
                fileReader.readAsDataURL(e.target.files[0]);
              }}
              className="w-full h-full opacity-0 absolute left-0 bottom-0 "
            />
          </div>

          <input
            className="w-full h-12 bg-transparent p-5 border border-zinc-600 rounded-lg"
            placeholder="Name your post"
            value={postName}
            onChange={(e) => {
              setPostName(e.target.value);
            }}
          />
          <textarea
            className="w-full h-1/3 bg-transparent p-5 border border-zinc-600 rounded-lg"
            placeholder="Write about your post....."
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>

          <button
            className="w-full h-12 font-medium bg-primary rounded-lg"
            onClick={onPostSubmit}
          >
            Save your post
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPostScreen;

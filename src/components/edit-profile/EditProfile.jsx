import React, { useState } from "react";
import { toast } from "react-toastify";

const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;

function EditProfile({ active, name, tags, setChanges, setActive }) {
  const [uname, setUname] = useState(name);
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateUserDetail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${productionUrl}/user/update`, {
      method: "PUT",
      body: JSON.stringify({
        name: uname,
        tag,
        userId: localStorage.getItem("userId"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      toast.success("Updated successfully");
      setChanges((prev) => !prev);
      setActive(false);
      setLoading(false);
    } else {
      toast.error("Error while updating user detail");
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };
  return (
    <div
      className="w-full md:w-1/3  text-tcolor gradient-2  flex gap-3 flex-col items-center justify-center transition-all overflow-auto"
      style={{ height: active ? "300px" : "0px" }}
    >
      <form
        onSubmit={handleUpdateUserDetail}
        className="w-[90%]  flex flex-col gap-2 overflow-auto"
      >

        <input
          type="text"
          defaultValue={name}
          placeholder={name}
          className="w-full h-10  gradient  text-tcolor placeholder:text-primary px-2 outline-none"
          onChange={(e) => setUname(e.target.value)}
        />
        <textarea
          name="tags"
          id="tags"
          className="w-full min-h-14 gradient  text-tcolor  px-2 outline-none"
          placeholder="#please #add #some #hashtags"
          onChange={(e) => setTag(e.target.value)}
          defaultValue={tags}
        ></textarea>
        <button className="bg-primary rounded h-10" type="submit">
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default EditProfile;

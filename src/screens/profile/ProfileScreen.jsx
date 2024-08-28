import React, { useEffect, useState } from "react";
import { PostCard, UserProfileImageCard } from "../../components";
import { post_data } from "../../constants";

function ProfileScreen() {
  const [userDetails, setUserDetails] = useState({});

  //   const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;
  const productionUrl = "http://localhost:4000";

  useEffect(() => {
    const handleFetchProfieDetails = async () => {
      const response = await fetch(`${productionUrl}/user/account`, {
        method: "POST",
        body: JSON.stringify({
          authKey: window.localStorage.getItem("authKey"),
          userId: window.localStorage.getItem("userId"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setUserDetails(await response.json());
      } else {
        window.alert("error occured , try agin later");
      }
    };
    handleFetchProfieDetails();
  }, []);
  
  return (
    <div className="w-full h-[90%]  flex flex-col items-center ">
      <div className="w-[90%] h-max ">
        <UserProfileImageCard {...userDetails?.userDetail} />
      </div>
      <div className="w-[90%] h-[70%]  overflow-auto">
        {userDetails?.posts?.map((data, index) => (
          <PostCard {...data} user={userDetails?.userDetail}  isProfileView={true} />
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;

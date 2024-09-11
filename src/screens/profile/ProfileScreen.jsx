import React, { useEffect, useState } from "react";
import {
  LoadingAnimationTwo,
  PostCard,
  UserProfileImageCard,
} from "../../components";
import { Link } from "react-router-dom";
import { Image } from "lucide-react";

function ProfileScreen() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [changes, setChanges] = useState(false);

  const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;

  useEffect(() => {
    const handleFetchProfieDetails = async () => {
      setLoading(true);
      const response = await fetch(`${productionUrl}/user/account`, {
        method: "POST",
        body: JSON.stringify({
          authKey: localStorage.getItem("authKey"),
          userId: localStorage.getItem("userId"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setUserDetails(await response.json());
        setLoading(false);
      } else {
        window.alert("error occured , try agin later");
        setTimeout(() => {
          setLoading(false);
        }, 8000);
      }
    };
    handleFetchProfieDetails();
  }, [changes]);

  return (
    <div className="w-full h-[82%] xs:h-[90%] gradient-2  flex md:gap-5 flex-col  items-center  ">
      <div className="w-[90%] md:w-1/3 h-max ">
        {!loading && <UserProfileImageCard {...userDetails?.userDetail} />}
      </div>
      <div className="w-[90%] md:w-1/3 h-[75%] md:h-[70%] pb-5  overflow-auto">
        {loading ? (
          <div className="w-full h-full   flex items-center justify-center">
            <LoadingAnimationTwo />
          </div>
        ) : userDetails?.posts?.length > 0 ? (
          userDetails?.posts?.map((data, index) => (
            <PostCard
              key={index}
              {...data}
              user={userDetails?.userDetail}
              isProfileView={true}
              setChanges={setChanges}
            />
          ))
        ) : (
          <div className="w-full h-1/2 text-tcolor flex gap-1 flex-col items-center justify-center">
            <h1>no posts</h1>
            <Link to={"/"}>
              <Image />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileScreen;

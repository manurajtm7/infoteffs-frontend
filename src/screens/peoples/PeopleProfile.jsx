import React, { useEffect, useState } from 'react'
import { LoadingAnimationTwo, PostCard, UserProfileImageCard } from "../../components"
import { Link, useParams } from 'react-router-dom'
import { Image } from 'lucide-react';

function PeopleProfile() {

    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [changes, setChanges] = useState(false);

    const params = useParams();

    const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;
    // const productionUrl = `http://localhost:4000`;
    const userId = params?.id;


    useEffect(() => {
        const handleFetchProfieDetails = async () => {
            setLoading(true);
            const response = await fetch(`${productionUrl}/user/profile/${userId}`, {
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
        <div className="w-full h-[82%] xs:h-[90%] gradient-2  flex md:gap-5 flex-col  items-center relative  ">

            <div className="w-[90%] md:w-1/3 h-max ">
                {!loading && (
                    <UserProfileImageCard
                        {...userDetails?.userDetail}
                        setIsEdit={{}}
                        isEdit={false}
                        DoesEdit={false}
                    />
                )}
            </div>
            <div className="w-full md:w-1/3 h-[75%] md:h-[70%] pb-20  overflow-auto">
                {loading ? (
                    <div className="w-full h-full   flex items-center justify-center ">
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
                            doesEdit={false}
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
    )
}

export default PeopleProfile
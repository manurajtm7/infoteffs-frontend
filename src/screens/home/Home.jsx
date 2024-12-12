import React from "react";
import { PostCard, SkeletonLoad, UploadPost } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { hanldeFetchData } from "../../controllers/FetchHandler"


function Home() {

  const { data, error, isLoading } = useQuery({
    queryKey: ["post_data"],
    queryFn: hanldeFetchData
  })


  if (error) return <h1>Error retry!</h1>


  return (
    <div className="w-full h-full gradient-2 grid  place-items-center ">
      <UploadPost />
      <div className="w-full md:w-1/3 h-full pb-24 flex flex-col items-center  overflow-auto">
        {isLoading ? (
          <div className="w-full h-screen flex flex-col items-center ">
            <SkeletonLoad />
          </div>
        ) : (
          data?.map((data, index) => <PostCard key={index} {...data} />)
        )}
      </div>
    </div>
  );
}

export default Home;

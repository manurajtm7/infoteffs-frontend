import React, { useEffect, useState } from "react";
import { PostCard, SkeletonLoad } from "../../components";
import { Link } from "react-router-dom";



function Feeds() {

  const [change, setChange] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // import.meta.env.VITE_REACT_APP_LOCAL_HOST || 

  const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST || "http://localhost:4000";

  useEffect(() => {
    const hanldeFetchData = async () => {
      setLoading(true);

      const response = await fetch(`${productionUrl}/user/feeds`, {
        method: "POST",
        body: JSON.stringify({ userId: localStorage.getItem("userId") }),
        headers: { "Content-Type": "application/json" },
      })

      if (response.ok) {
        setPosts((await response.json()).feeds);
        setLoading(false);
        setErr(false);
      }
      else {
        setErr(true)
      }

    };

    hanldeFetchData();
  }, []);
  if (err) return (
    <h1>Login required</h1>
  )
  return (
    <div className="w-full h-screen text-tcolor gradient-2   grid items-start justify-items-center">

      <div className="w-full md:w-1/3 h-4/5  ">
        <div className="w-[85%]  pt-5 py-2 mx-auto   ">
          <h1 className=" text-lg font-semibold feeds-gradient  text-transparent bg-clip-text "> Feeds </h1>
        </div>

        <div className="h-[80vh]  overflow-auto">
          {loading ? (
            <div className="w-full h-screen  flex flex-col items-start ">
              {/* {Array.from({ length: 20 }).map(() => ( */}
              <SkeletonLoad />
              {/* ))} */}
            </div>
          ) :
            posts.length > 0 ?

              (
                posts.map((data, index) => <PostCard key={index} {...data} />)
              ) : (
                <div className="w-full h-1/2  text-center flex gap-1 flex-col items-center justify-center">
                  <h1>No feeds there</h1>
                  <Link to={"/user/profile"} className="text-blue-500 text-xs">please add some tags</Link>
                </div>
              )}
        </div>
      </div>
    </div>
  );
}

export default Feeds;

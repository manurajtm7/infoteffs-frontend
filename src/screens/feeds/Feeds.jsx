import React, { useEffect, useState } from "react";
import { LoadingAnimation, PostCard } from "../../components";

function Feeds() {

  const [change, setChange] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(true);
  const [loading, setLoading] = useState(false);

  // import.meta.env.VITE_REACT_APP_LOCAL_HOST || 
  
  const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST || "http://localhost:4000";

  useEffect(() => {
    const hanldeFetchData = () => {
      setLoading(true);
      try {
        fetch(`${productionUrl}/user/feeds`, {
          method: "POST",
          body: JSON.stringify({ userId: localStorage.getItem("userId") }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((d) => {
            setPosts(d.feeds);
            setLoading(false);
            setErr(false);
          });
      } catch (e) {
        setErr(true);
        console.error(e);
      }
    };

    hanldeFetchData();
  }, []);

  return (
    <div className="w-full h-screen text-tcolor gradient-2   grid items-start justify-items-center">

      <div className="w-full md:w-1/3 h-4/5  ">
        <div className="w-[85%]  pt-5 py-2 mx-auto   ">
          <h1 className=" text-lg font-semibold feeds-gradient  text-transparent bg-clip-text "> Feeds </h1>
        </div>

        <div className="h-[80vh]  overflow-auto">
          {loading ? (
            <div className="w-full h-screen grid gap-8 place-items-center ">
              {Array.from({ length: 20 }).map(() => (
                <LoadingAnimation />
              ))}
            </div>
          ) : (
            posts.map((data, index) => <PostCard key={index} {...data} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Feeds;

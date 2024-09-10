import React, { useEffect, useState } from "react";
import { LoadingAnimation, PostCard, UploadPost } from "../../components";
import { post_data } from "../../constants";

function Home() {
  const [change, setChange] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(true);
  const [loading, setLoading] = useState(false);

  const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;

  useEffect(() => {
    const hanldeFetchData = () => {
      setLoading(true);
      try {
        fetch(`${productionUrl}/`)
          .then((res) => res.json())
          .then((d) => {
            setPosts(d);
            setLoading(false);
            setErr(false);
          });
      } catch (e) {
        setErr(true);
        console.error(e);
      }
    };

    hanldeFetchData();
  }, [change]);

  return (
    <div className="w-full h-full gradient-2 grid  place-items-center ">
      <UploadPost />
      <div className="w-[90%] md:w-1/3 h-full pb-24 flex flex-col items-center  overflow-auto">
        {loading ? (
          <div className="w-full h-screen grid gap-8 place-items-center ">
            {Array.from({ length: 20 }).map((_, __) => (
              <LoadingAnimation />
            ))}
          </div>
        ) : (
          posts.map((data, index) => <PostCard key={index} {...data} />)
        )}
      </div>
    </div>
  );
}

export default Home;

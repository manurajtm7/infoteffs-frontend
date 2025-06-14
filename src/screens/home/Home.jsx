import { PostCard, SkeletonLoad, UploadPost } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { hanldeFetchData } from "../../controllers/FetchHandler"
import { useEffect, useRef } from "react";



function Home() {

  const scrollRef = useRef(null)
  const { data, error, isLoading } = useQuery({
    queryKey: ["post_data"],
    queryFn: hanldeFetchData
  })



  useEffect(() => {
    const previousScollValue = parseInt(sessionStorage.getItem("INTFS_SCROLL_VALUE"))
    console.log(previousScollValue);

    scrollRef.current.scrollTo({
      top: previousScollValue,
    })
  }, [data, isLoading])


  function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  }



  useEffect(() => {
    let scrollThrottleFunction = throttle(() => {
      sessionStorage.setItem("INTFS_SCROLL_VALUE", scrollRef.current.scrollTop)
    }, 150)

    const element = scrollRef.current;
    element.addEventListener("scroll", scrollThrottleFunction)
    return () => {
      element.removeEventListener("scroll", scrollThrottleFunction)
    }
  })



  if (error) return <h1>Error retry!</h1>


  return (
    <div className="w-full h-full gradient-2 grid  place-items-center ">
      <UploadPost />
      <div ref={scrollRef} className="w-full md:w-1/3 h-full pb-24 flex flex-col items-center  overflow-auto">
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

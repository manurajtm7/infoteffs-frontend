import { PostCard, SkeletonLoad, UploadPost } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { hanldeFetchData } from "../../controllers/FetchHandler"
import { useEffect, useRef } from "react";

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}


function Home() {

  const scrollRef = useRef(null)
  const { data, error, isLoading } = useQuery({
    queryKey: ["post_data"],
    queryFn: hanldeFetchData
  })

  useEffect(() => {
    if (!isLoading && data.length) {

      const previousScollValue = Number(sessionStorage.getItem("INTFS_SCROLL_VALUE")) || 0
      setTimeout(() => {
        scrollRef.current.scrollTo({
          top: previousScollValue,
          behavior: 'auto'
        })
      }, 50)
    }
  }, [data, isLoading])


  useEffect(() => {
    let debousedFunction = debounce(() => {
      sessionStorage.setItem("INTFS_SCROLL_VALUE", scrollRef.current.scrollTop)
    }, 100)

    const element = scrollRef.current;
    element.addEventListener("scroll", debousedFunction)
    return () => {
      element.removeEventListener("scroll", debousedFunction)
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

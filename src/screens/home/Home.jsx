import { PostCard, SkeletonLoad, UploadPost } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { hanldeFetchData } from "../../controllers/FetchHandler"
import useScroll from "../../hooks/useScroll";

function Home() {

  const { data, error, isLoading } = useQuery({
    queryKey: ["post_data"],
    queryFn: hanldeFetchData
  })
  const [scrollRef] = useScroll(data, isLoading , 'INFO_HOME_SCROLL')


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

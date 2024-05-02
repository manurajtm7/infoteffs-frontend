import NavBar from "./NavBar";
import "./Styles/index.css";
import GetCotents from "./GetCotents";
import NotLog from "./NotLog";
import { useEffect, useState } from "react";
import NoContents from "./NoContents";

// import Contents from "./Contents";

const Home = () => {
  const [token, setToken] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("authKey")) setToken(1);
    else setToken(0);
  }, [token]);

  return (
    <div className="main-container">
      <NavBar token={token} />
      <div className="contents-pass">
        {token === 0 ? <NotLog /> : <GetCotents />}
      </div>
      {token === 1 ? <NoContents /> : ""}
    </div>
  );
};

export default Home;

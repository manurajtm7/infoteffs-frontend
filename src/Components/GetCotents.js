import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import img from "./images/user2.png";
import Loader from "./Loader";

function GetCotents() {
  let [info, setInfo] = useState([]);
  let [err, setErr] = useState(true);
  const [change, setChange] = useState(false);

  useEffect(() => {
    console.log("running");
    try {
      fetch(`${process.env.REACT_APP_LOCAL_HOST}/`)
        .then((res) => res.json())
        .then((d) => {
          setInfo(d);
          setErr(false);
        });
    } catch (e) {
      setErr(true);
      console.error(e);
    }
  }, [change]);

  return (
    <div>
      {info.length < 1 ? (
        <h4 className="error-notify">
          {err ? <Loader /> : "No contents available"}
        </h4>
      ) : (
        info.map((data, index) => {
          if (info.length > 0) {
            return (
              <Contents
                {...data}
                src={img}
                setChange={setChange}
                alt="fetching file"
                key={index}
              />
            );
          }
        })
      )}
    </div>
  );
}

export default GetCotents;
//

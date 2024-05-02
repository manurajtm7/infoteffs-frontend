import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "../NavBar";
// import { Link } from "react-router-dom";
import "./styles/community.css";

function Delete() {
  const [userdata, setUserData] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_LOCAL_HOST}/Delete`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        setUserData(d);
      });
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <div className="search-bar">
        <input
          placeholder="search user here"
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <h5 className="table-heading">community on infoteffs</h5>

      <div className="table-container">
        <table align="center">
          {userdata
            .filter((data) =>
              data.name.toLowerCase().includes(input.toLowerCase())
            )
            .map((data, index) => (
              <tr key={index}>
                <td>
                  <img src={data.image} className="profile-image" />
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Delete;

// <ul>
// <span className="list-head">Name</span>
// {
//   userdata.map((data, index) => {
//     return (
//       <li className="userDatasets" key={index}>
//         {JSON.stringify(data.name)}
//       </li>
//     );
//   })

//   // JSON.stringify(userdata[0].name)
// }
// </ul>
// <ul>
// <span className="list-head">Email</span>
// {
//   userdata.map((data, index) => {
//     return (
//       <li className="userDatasets" key={index}>
//         {JSON.stringify(data.email)}
//         <Link
//           to={data._id}
//           className="delete-user"
//           onClick={() => DeleteUserHandle(data._id)}
//         >
//           X
//         </Link>
//       </li>
//     );
//   })

//   // JSON.stringify(userdata[0].name)
// }
// </ul>
// <ul>
// <span className="list-head">Time</span>
// {
//   userdata.map((data, index) => {
//     return (
//       <li className="userDatasets" key={index}>
//         {JSON.stringify(data.date)}
//       </li>
//     );
//   })

//   // JSON.stringify(userdata[0].name)
// }
// </ul>
// <ul>
// <span className="list-head">ID</span>
// {
//   userdata.map((data, index) => {
//     return (
//       <li className="userDatasets" key={index}>
//         {JSON.stringify(data._id)}
//       </li>
//     );
//   })

//   // JSON.stringify(userdata[0].name)
// }
// </ul>

// let DeleteUserHandle = async (id) => {
//     // console.log(id);

//     await fetch("http://localhost:4000/Delete", {
//       method: "POST",
//       body: JSON.stringify({ id }),
//       headers: { "Content-Type": "application/json" },
//     });
//   };

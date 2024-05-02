import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePost from "./Components/CreatePost";
import Coummunity from "./Components/community-route/Coummunity";
import "./app.css"

function App() {
  const token = localStorage.getItem("authKey");
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {token && <Route path="/Create" element={<CreatePost />} />}
        {token && <Route path="/community" element={<Coummunity />} />}
      </Routes>
    </>
  );
}

export default App;

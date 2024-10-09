import "./App.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import {
  Feeds,
  Home,
  Login,
  ProfileScreen,
  Register,
  SettingScreen,
  UploadPostScreen,
} from "./screens";
import { NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/top-bar/TopBar";

function App() {
  return (
    <main className="w-full h-screen gradient font-poppins">
      <div className="w-full h-max">
        <NavBar />
        <TopBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/user/profile" element={<ProfileScreen />} />
        <Route path="/user/settings" element={<SettingScreen />} />
        <Route path="/post/upload" element={<UploadPostScreen />} />
        <Route path="/user/feeds" element={<Feeds />} />
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;

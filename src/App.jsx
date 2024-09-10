import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  ProfileScreen,
  Register,
  UploadPostScreen,
} from "./screens";
import { NavBar } from "./components";
import TopBar from "./components/top-bar/TopBar";
import SettingScreen from "./screens/settings/SettingScreen";

function App() {
  return (
    <main className="w-full h-screen gradient">
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
      </Routes>
    </main>
  );
}

export default App;

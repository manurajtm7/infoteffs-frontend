import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./screens";
import { NavBar } from "./components";
import UploadPostScreen from "./screens/upload-post/UploadPostScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";

function App() {
  return (
    <main className="w-full h-screen gradient">
      <div className="w-full h-max">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Home />} />
        <Route path="/auth/login" element={<Home />} />
        <Route path="/user/profile" element={<ProfileScreen />} />
        <Route path="/post/upload" element={<UploadPostScreen />} />
      </Routes>
    </main>
  );
}

export default App;

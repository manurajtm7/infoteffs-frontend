import "./App.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import {
  Feeds,
  Home,
  Login,
  PeopleProfile,
  PeoplesScreen,
  ProfileScreen,
  Register,
  SettingScreen,
  UploadPostScreen,
} from "./screens";
import { NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/top-bar/TopBar";
import { NotifyContainer } from "./utilities/notify/NotifyContainer";
import ChatScreen from "./screens/chat/ChatScreen";
import QRGenerator from "./screens/chat/QRGenerator";
import QRScanner from "./screens/chat/QRScanner";
import ChatSelect from "./screens/chat/ChatSelect";
import { ChatProvider } from "./contexts/ChatContext";



function App() {



  return (
    <main className="w-full h-screen gradient font-poppins">
      <div className="w-full h-max" >
        <NavBar />
        <TopBar />
      </div>
      <ChatProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/user/profile" element={<ProfileScreen />} />
          <Route path="/user/settings" element={<SettingScreen />} />
          <Route path="/post/upload" element={<UploadPostScreen />} />
          <Route path="/user/feeds" element={<Feeds />} />
          <Route path="/peoples" element={<PeoplesScreen />} />
          <Route path="/user/profile/:id" element={<PeopleProfile />} />

          <Route path="/chat-select" element={<ChatSelect />} />
          <Route path="/qr-gen" element={<QRGenerator />} />
          <Route path="/qr-scan" element={<QRScanner />} />
          <Route path="/chat/:id" element={<ChatScreen />} />
        </Routes>
        <ToastContainer />
        <NotifyContainer />
      </ChatProvider>
    </main>
  );
}

export default App;

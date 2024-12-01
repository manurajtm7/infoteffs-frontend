import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NotifyContext } from "./utilities/notify/NotifyContext";


createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <NotifyContext>
      <App />
    </NotifyContext>
  </BrowserRouter>

);

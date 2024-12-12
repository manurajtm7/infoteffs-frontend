import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NotifyContext } from "./utilities/notify/NotifyContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <NotifyContext>
        <App />
      </NotifyContext>
    </QueryClientProvider>
  </BrowserRouter>

);

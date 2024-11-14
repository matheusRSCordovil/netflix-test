import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AlertProvider } from "./Context/AlertContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Router>
  </StrictMode>
);

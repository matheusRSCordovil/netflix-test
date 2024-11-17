import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AlertProvider } from "./Context/AlertContext.tsx";
import { DetailProvider } from "./Context/DetailContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AlertProvider>
        <DetailProvider>
          <App />
        </DetailProvider>
      </AlertProvider>
    </Router>
  </StrictMode>
);

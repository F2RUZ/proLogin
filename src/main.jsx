import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <StrictMode>
        <App />
      </StrictMode>
    </GoogleOAuthProvider>
  </Router>
);

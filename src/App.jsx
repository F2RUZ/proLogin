// src/App.js
import React from "react";
import Login from "./components/login/Login";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Login />
    </div>
  );
}

export default App;

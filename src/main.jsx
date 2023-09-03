import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/style.css";
import "./assets/demo/style-demo.css";
import "./assets/mapbox-gl.css";
import "./assets/mapbox-gl.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

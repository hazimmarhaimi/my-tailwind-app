import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css"; // Import your main CSS file
import "./tailwind.css"; // Import Tailwind CSS
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

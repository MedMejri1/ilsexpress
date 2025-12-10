import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- change here

import "./index.scss";

import App from "./App.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter>     {/* <-- replace BrowserRouter with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

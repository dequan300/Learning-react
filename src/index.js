import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <div>
    <App />
    <p>created by dequan</p>
    <p>copyright @ {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

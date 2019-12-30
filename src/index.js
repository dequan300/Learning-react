import React from "react";
import ReactDom from "react-dom";
import List from "../public/list";
import App from "./App";

ReactDom.render(
  <div>
    <App />
    <p>created by </p>
    <p>copyright @ {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

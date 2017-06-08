import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Search from "./components/Search";

const USER_DATA = {
  name: "Jeremy Ashkenas",
  username: "jashkenas",
  imageURL: "http://fillmurray.com/200/200"
};

ReactDOM.render(<Search />, document.querySelector("#app"));

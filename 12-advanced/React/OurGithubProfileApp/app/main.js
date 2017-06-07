import React from "react";
import ReactDOM from "react-dom";
// import Avatar from "./components/Avatar";
import Home from "./components/Home";

const USER_DATA = {
  name: "Jeremy Ashkenas",
  username: "jashkenas",
  imageURL: "http://fillmurray.com/200/200"
};

ReactDOM.render(<Home />, document.querySelector("#app"));

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/Routes";

const USER_DATA = {
  name: "Jeremy Ashkenas",
  username: "jashkenas",
  imageURL: "http://fillmurray.com/200/200"
};

ReactDOM.render(<Routes />, document.querySelector("#app"));

import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="notFoundComponent">
        <h2>Something went wrong</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }
}

export default NotFound;

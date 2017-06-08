import React from "react";
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";

class Details extends React.Component {
  render() {
    return (
      <div className="detailsComponent">
        Avatar Component
        <hr />
        <div className="row">
          <div className="six columns">
            <UserProfile />
          </div>
          <div className="six columns">
            <UserRepositories />
          </div>
        </div>
      </div>
    );
  }
}

// Render this component instead of Search!
export default Details;

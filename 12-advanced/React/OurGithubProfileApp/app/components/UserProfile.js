import React from "react";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfileComponent">
        <h5>Stats</h5>
        <p>Followers:</p>
        <p>Following:</p>
        <p>Public Repositories:</p>
        <p>Public Gists</p>
      </div>
    );
  }
}

export default UserProfile;
// Render this component in Details.js

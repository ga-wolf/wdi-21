import React from "react";
import Loading from "./Loading";

class UserProfile extends React.Component {
  render() {
    if (this.props.user) {
      const {
        followers,
        following,
        public_gists: publicGists,
        public_repos: publicRepos
      } = this.props.user;
      return (
        <div className="userProfileComponent">
          <h5>Stats</h5>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repositories: {publicRepos}</p>
          <p>Public Gists: {publicGists}</p>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default UserProfile;

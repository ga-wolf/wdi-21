import React from "react";
import GithubHelpers from "../utils/GithubHelpers";
import Avatar from "./Avatar";
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: null
    };
  }
  componentWillMount() {
    const username = this.props.match.params.username;
    GithubHelpers.getUser(username).then(response => {
      const user = response.data;
      this.setState({ user });
    });
    GithubHelpers.getUserRepos(username).then(response => {
      const repos = response.data;
      this.setState({
        repos: repos
      });
    });
  }
  render() {
    return (
      <div className="detailsComponent">
        <Avatar user={this.state.user} />
        <hr />
        <div className="row">
          <div className="six columns">
            <UserProfile user={this.state.user} />
          </div>
          <div className="six columns">
            <UserRepositories repos={this.state.repos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

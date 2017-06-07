import React from "react";

class ProfileLink extends React.Component {
  render() {
    const url = `https://github.com/${this.props.username}`;
    return (
      <div>
        <a href={url} target="_blank">
          {this.props.username}
        </a>
      </div>
    );
  }
}

export default ProfileLink;

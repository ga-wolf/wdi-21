import React from "react";
import ProfileLink from "./ProfileLink";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <ProfilePic imageURL={this.props.user.imageURL} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
}

export default Avatar;

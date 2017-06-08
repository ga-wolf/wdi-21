import React from "react";
import Loading from "./Loading";
import ProfileLink from "./ProfileLink";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

class Avatar extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <div className="avatar">
          <ProfilePic imageURL={this.props.user.avatar_url} />
          <ProfileName name={this.props.user.name} />
          <ProfileLink username={this.props.user.login} />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Avatar;

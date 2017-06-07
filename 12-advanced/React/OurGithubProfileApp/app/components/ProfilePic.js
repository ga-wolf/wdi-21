import React from "react";

class ProfilePic extends React.Component {
  render() {
    return <img src={this.props.imageURL} />;
  }
}

export default ProfilePic;

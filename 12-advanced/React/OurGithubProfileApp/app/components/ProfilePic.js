import React from "react";

// Stateless Functional Component
// this.props === props
// You can't have state
// No component life cycle
// Adding event handlers is much harder
// But, it is much faster to run, and write

const ProfilePic = props => {
  return <img width="200" src={props.imageURL} />;
};

// class ProfilePic extends React.Component {
//   render() {
//     return <img width="200" src={this.props.imageURL} />;
//   }
// }

export default ProfilePic;

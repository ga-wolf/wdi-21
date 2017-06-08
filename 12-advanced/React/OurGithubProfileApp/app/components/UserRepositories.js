// React is an object
// Get that object from the react node_modules package
// Create a variable called Component that references React.Component (object destructuring)
import React, { Component } from "react";

class UserRepositories extends Component {
  render() {
    return (
      <div className="userRepositoriesComponent">
        <h5>Repositories</h5>
        <ul>
          <li>Repository One</li>
          <li>Repository Two</li>
          <li>...</li>
        </ul>
      </div>
    );
  }
}

export default UserRepositories;

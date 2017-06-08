import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    // Make sure every time pickRandomStudent is called, the this keyword refers to the instance of the Home component (we have access to state, props etc.)
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
  }
  pickRandomStudent() {
    console.log("Pick Random Student");
  }
  render() {
    return (
      <div className="home">
        <h2>Welcome to our Github App</h2>
        <p>This will display a profile page for a given user</p>
        <hr />
        <Link to="/search">
          <button className="button-primary">
            Search
          </button>
        </Link>
        &nbsp;
        <button className="button-primary" onClick={this.pickRandomStudent}>
          Pick a random WDi21 student
        </button>
      </div>
    );
  }
}

export default Home;

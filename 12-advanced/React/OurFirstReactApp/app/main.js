import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

class HelloUser extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <h2>
        Hello {name}
      </h2>
    );
  }
}

class FavouriteNumber extends React.Component {
  render() {
    return <p>A favourite number is: {this.props.favNum}</p>;
  }
}

// Create a component called FavouriteNumber
// I want to be able to provide a favouriteNumber as a property
// I want you to render this component 3 times in the WDI21 component (at least once for 42)

class WDI21 extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello WDi21</h2>
        <hr />
        <HelloUser name="Phil" />
        <HelloUser name="Lynda" />
        <HelloUser name="Bijay" />
        <hr />
        <FavouriteNumber favNum="42" />
        <FavouriteNumber favNum="63" />
        <FavouriteNumber favNum="84" />
      </div>
    );
  }
}

class ShowMovie extends React.Component {
  render() {
    return (
      <div>
        <h5>Movie Name: {this.props.title}</h5>
        <h6>Stars: {this.props.stars}</h6>
      </div>
    );
  }
}

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h3>Here are my movies</h3>
        <hr />
        <ShowMovie title="Satantango" stars="4122" />
        <ShowMovie title="The Life Aquatic" stars="121" />
        <ShowMovie title="Jurassic Park" stars="4.2" />
        <ShowMovie title="Jaws" stars="4.2" />
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    if (this.props.completed === true) {
      return <p>{this.props.task} - DONE!</p>;
    } else {
      return <p>{this.props.task}</p>;
    }
  }
}
// Validating that certain properties are provided, and they are in the right format
TodoItem.propTypes = {
  task: React.PropTypes.string.isRequired
};

TodoItem.defaultProps = {
  completed: false
};

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Here are all my todos</h2>
        <hr />
        <TodoItem task="Add propTypes Validations" />
        <TodoItem task="Live for React" />
        <TodoItem task="Love Webpack" completed={true} />
        <TodoItem task="Enjoy Babel" completed={true} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor() {
    super(); // Run all the setup stuff for React.Component
    this.state = {};
    console.log("\tChildComponent: constructor()");
  }
  componentWillMount() {
    console.log("\tChildComponent: componentWillMount()");
  }
  render() {
    console.log("\tChildComponent: render()");
    return (
      <div>
        <h5>I am the ChildComponent</h5>
        <hr />
      </div>
    );
  }
  componentDidMount() {
    console.log("\tChildComponent: componentDidMount()");
  }
}

class ParentComponent extends React.Component {
  constructor() {
    super(); // Run all the setup stuff for React.Component
    this.state = {};
    console.log("ParentComponent: constructor()");
  }
  componentWillMount() {
    console.log("ParentComponent: componentWillMount()");
  }
  render() {
    console.log("ParentComponent: render()");
    return (
      <div>
        <h3>I am the ParentComponent</h3>
        <hr />
        <ChildComponent />
      </div>
    );
  }
  componentDidMount() {
    console.log("ParentComponent: componentDidMount()");
  }
}

class NewsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      completedLoading: false
    };
  }
  componentWillMount() {
    window.setTimeout(() => {
      this.setState({
        completedLoading: true
      });
    }, 5000);
  }
  render() {
    if (this.state.completedLoading) {
      return (
        <div>
          <h1>NewsFeed</h1>
          <hr />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
  }
  handleButtonClick() {
    const currentNumClicks = this.state.numClicks;
    this.setState({
      numClicks: currentNumClicks + 1
    });
    // Explicit Mutation
    // 1. Updates the component state (updating internal data)
    // 2. Forces a re-render with the new state
  }
  render() {
    return (
      <div>
        <h1>Click Count: {this.state.numClicks}</h1>
        <button onClick={this.handleButtonClick.bind(this)}>
          Click me!
        </button>
      </div>
    );
  }
}

class LotsOfClickCounters extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <ClickCounter />
        <ClickCounter />
      </div>
    );
  }
}

ReactDOM.render(<LotsOfClickCounters />, document.querySelector("#app"));

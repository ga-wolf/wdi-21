import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";
import Details from "../components/Details";
import NotFound from "../components/NotFound";

const Routes = () => {
  return (
    <HashRouter>
      <div className="myReactApp">
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/search">Search</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/details/:username" component={Details} />
          <Route component={NotFound} />
        </Switch>

      </div>
    </HashRouter>
  );
};

export default Routes;

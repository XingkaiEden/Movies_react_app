import React, { Component } from "react";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from './components/common/navBar';
import NotFound from "./components/common/notFound";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <main className="container-fluid">
        <NavBar />
        <Switch>

          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" />

          <Redirect to="/not-found" />
        </Switch>

        {/* 
        <Movies /> */}
      </main>
    );
  }
}

export default App;

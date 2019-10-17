import React, { Component } from "react";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from './components/common/navBar';
import NotFound from "./components/common/notFound";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieForm from "./components/movieForm";


// you have to put <Route path="/movies/:id" component={MovieForm} /> in front of "/movies"
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">

          <Switch>

            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/movies" />

            <Redirect to="/not-found" />
          </Switch>


        </main>
      </React.Fragment>
    );
  }
}

export default App;

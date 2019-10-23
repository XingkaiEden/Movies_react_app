import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from './components/common/navBar';
import NotFound from "./components/common/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from './components/registerForm';
import Logout from "./components/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";


// you have to put <Route path="/movies/:id" component={MovieForm} /> in front of "/movies"
class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUserJWT();
    this.setState({ user })
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">

          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            {/* we should portect it, otherwise, when no one login, user can just type"/movies/new" to fit ":id"
            in order to access new movie form */}
            <Route path="/movies"
              render={props => <Movies {...props} user={user}></Movies>} />
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

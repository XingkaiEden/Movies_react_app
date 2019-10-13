import React, { Component } from "react";
import Movie from "./movie";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <p className="text-capitalize">There are no movies in the database</p>
      );
    return (
      <div className="container">
        <p className="text-capitalize">
          there are {count} movies in the database
        </p>
        <table className=" table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Gener</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <Movie
                movie={movie}
                onDelete={this.handleDelete}
                key={movie._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;

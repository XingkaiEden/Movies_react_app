import React, { Component } from "react";
import Movie from "./movie";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./pagination";
import { paginate } from "../utils/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    // movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies,
      movies: { length: count }
    } = this.state; //nested Destructuring
    const currPageOfMvoie = paginate(movies, currentPage, pageSize);
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currPageOfMvoie.map(movie => (
              <Movie
                key={movie._id}
                movie={movie}
                onDelete={() => this.handleDelete(movie)}
                onLiked={() => this.handleLike(movie)}
              />
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;

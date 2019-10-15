import React, { Component } from "react";
import Likes from "./likes";

class Movie extends Component {
  state = {};
  render() {
    const { movie, onDelete, onLiked } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Likes onLiked={() => onLiked(movie)} movie={movie} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;

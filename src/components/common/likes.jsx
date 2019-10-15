import React, { Component } from "react";

class Likes extends Component {
  state = {};
  render() {
    const { movie, onLiked } = this.props;
    let classes = "fa fa-heart";
    if (!movie.like) classes += "-o";
    return (
      <i
        onClick={() => onLiked(movie)}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Likes;

import React, { Component } from "react";

class Likes extends Component {
  render() {
    const { item, onLiked } = this.props;
    let classes = "fa fa-heart";
    if (!item.like) classes += "-o";
    return (
      <i
        onClick={() => onLiked(item)}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Likes;

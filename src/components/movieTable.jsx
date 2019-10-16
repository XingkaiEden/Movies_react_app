import React, { Component } from 'react';
import Movie from "./common/movie";


class MovieTable extends Component {
    handleSort = item => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.selectedTitle === item) {
            if (sortColumn.order === "asc")
                sortColumn.order = "desc";
            else
                sortColumn.order = "asc";
        } else {
            sortColumn.order = "asc";
            sortColumn.selectedTitle = item;
        }
        this.props.onSort(sortColumn);
    }
    render() {
        const { onDelete, onLiked, currPageOfMvoie } = this.props;
        return (
            <table className=" table">
                <thead>
                    <tr>
                        <th style={{ cursor: "pointer" }} onClick={() => this.handleSort("title")}>Title</th>
                        <th onClick={() => this.handleSort("genre")} style={{ cursor: "pointer" }}>Genre</th>
                        <th onClick={() => this.handleSort("numberInStock")} style={{ cursor: "pointer" }}>Stock</th>
                        <th onClick={() => this.handleSort("dailyRentalRate")} style={{ cursor: "pointer" }}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currPageOfMvoie.map(movie => (
                        <Movie
                            key={movie._id}
                            movie={movie}
                            onDelete={movie => onDelete(movie)}
                            onLiked={movie => onLiked(movie)}
                        />
                    ))}
                </tbody>
            </table >);
    }


}


export default MovieTable;


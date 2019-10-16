import React from 'react';
import Movie from "./common/movie";

const MovieTable = (props) => {
    const { onDelete, onLiked, currPageOfMvoie, onSort } = props;
    return (<table className=" table">
        <thead>
            <tr>
                <th style={{ cursor: "pointer" }} onClick={() => onSort("title")}>Title</th>
                <th onClick={() => onSort("genre")} style={{ cursor: "pointer" }}>Genre</th>
                <th onClick={() => onSort("numberInStock")} style={{ cursor: "pointer" }}>Stock</th>
                <th onClick={() => onSort("dailyRentalRate")} style={{ cursor: "pointer" }}>Rate</th>
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

export default MovieTable;
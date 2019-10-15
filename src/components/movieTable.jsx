import React from 'react';
import Movie from "./common/movie";

const MovieTable = (props) => {
    const { onDelete, onLiked, currPageOfMvoie } = props;
    return (<table className=" table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
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
                    onDelete={movie => onDelete(movie)}
                    onLiked={movie => onLiked(movie)}
                />
            ))}
        </tbody>
    </table>);
}

export default MovieTable;
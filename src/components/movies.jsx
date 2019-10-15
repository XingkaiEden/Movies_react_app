import React, { Component } from "react";
import Movie from "./movie";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./pagination";
import { paginate } from "../utils/pagination";
import ListGroup from "./listGroup"
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
    state = {
        movies: [],
        genre: [],  // we use an empty array becasue of the delay between componentDidMount and state. 
        //we don't want undefined during data transfer, so an empty array is apply
        currentPage: 1,


        pageSize: 4
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genre: getGenres() });
    }
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
    handleChangeGenre = item => {

        this.setState({ selectedItem: item });
        // console.log(item)
    }
    render() {
        const {
            pageSize,
            currentPage,
            movies,
            genre,
            selectedItem,

            movies: { length: count }
        } = this.state; //nested Destructuring
        const filtered = selectedItem ? movies.filter(m => m.genre._id === selectedItem._id) : movies;
        const currPageOfMvoie = paginate(filtered, currentPage, pageSize);
        if (count === 0)
            return (
                <p className="text-capitalize">There are no movies in the database</p>
            );
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            // valueProperty="_id" //it makes <ListGroup/> reusable not only for Genre, but any other
                            // textProperty="name" //but there are too many interfaces here, we can encapsulate them into defaultProperty
                            items={genre}
                            selectedItem={selectedItem}
                            onChangeGenre={item => this.handleChangeGenre(item)} />
                    </div>
                    <div className="col">
                        <p className="text-capitalize">there are {count} movies in the database</p>
                        <table className=" table">
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
                                        onDelete={movie => this.handleDelete(movie)}
                                        onLiked={movie => this.handleLike(movie)}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className="text-center">
                            <Pagination
                                itemsCount={filtered.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                            />
                        </div></div>

                </div>
            </div>
        );
    }
}
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
export default Movies;

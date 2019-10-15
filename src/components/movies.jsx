import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagination";
import ListGroup from "./common/listGroup"
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";

class Movies extends Component {
    state = {
        movies: [],
        genre: [],  // we use an empty array becasue of the delay between componentDidMount and state. 
        //we don't want undefined during data transfer, so an empty array is apply
        currentPage: 1,
        selectedItem: "All Genre",
        pageSize: 4
    };
    componentDidMount() { //import data from server

        this.setState({ movies: getMovies(), genre: [{ name: "All Genre" }, ...getGenres()] });
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

        this.setState({ selectedItem: item, currentPage: 1 });
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


        const filtered = selectedItem && selectedItem._id ? movies.filter(m => m.genre._id === selectedItem._id) : movies;
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
                        <p className="text-capitalize">there are {filtered.length} movies in the database</p>
                        <MovieTable

                            onDelete={movie => this.handleDelete(movie)}
                            onLiked={movie => this.handleLike(movie)}
                            currPageOfMvoie={currPageOfMvoie}
                        />
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

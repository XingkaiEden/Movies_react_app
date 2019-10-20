import React from 'react';
import Form from "./common/form";
import Joi from 'joi-browser';
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";


class MovieForm extends Form {
    state = {
        data: { title: "", genreId: '', numberInStock: '', dailyRentalRate: "" },
        genres: [],
        error: {}
    };
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),

    };
    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(movie) });
        //reason not sign movie directly is server is designed for genral data, you have to convert
        // it into your current page
        //otherwise, you will get error message:"changing controlled to uncontrolled"


    }
    mapToViewModel = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    };

    doSubmit = () => {
        // console.log(this.state.data) //test
        saveMovie(this.state.data);
        this.props.history.push('/movies');
        // console.log(this.state.data)

    }

    render() {

        return (
            <div>
                <h1>Movie Form </h1>
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("title", "Title")}
                    {this.renderSelectInput("genreId", "Gnere", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
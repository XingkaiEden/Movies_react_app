import React from 'react';
import Form from "./common/form";
import Joi from 'joi-browser';
import { saveMovie, getMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";


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
    async  populateGenres() {
        const { data: genres } = await getGenres();
        this.setState({ genres });
    };
    async populateMovies() {
        try {
            const movieId = this.props.match.params.id;
            if (movieId === "new") return;

            const { data: movie } = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie) });
        } catch (error) {
            if (error.response && error.response.status === 404)
                this.props.history.replace("/not-found");
        }
    };
    componentDidMount() {
        // IDK if i need another await & async here
        this.populateGenres();
        this.populateMovies();


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

    doSubmit = async () => {
        // console.log(this.state.data) //test
        await saveMovie(this.state.data);
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
import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";
export function getMovies() {
    return http.get(apiEndPoint);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndPoint + "/" + movieId);
}
export function getMovie(movieId) {
    return http.get(`${apiEndPoint}/${movieId}`);
}


export function saveMovie(movie) {
    if (movie._id) { // if the movie has id, which means this movie has in server already
        //put() to update
        const data = { ...movie }
        delete data._id;
        return http.put(`${apiEndPoint}/${movie._id}`, data);

    } else { //if the movie doesn't have id, which means this movie is a new movie, then use post()
        return http.post(`${apiEndPoint}`, movie);
    }
}
import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";
export function getMovies() {
    return http.get(apiEndpoint);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + "/" + movieId);
}
// export function getMovie(id) {
//     return http.get(`${apiUrl}/movies/${id}`);
// }


// export function saveMovie() {
//     return http.post(`${apiUrl}/movies`);
// }
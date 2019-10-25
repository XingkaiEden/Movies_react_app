import http from "./httpServices";


const apiEndPoint = "/movies";
function movieUrl(id) {
    return `${apiEndPoint}/${id}`;
}
export function getMovies() {
    return http.get(apiEndPoint);
}
export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}
export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}


export function saveMovie(movie) {
    if (movie._id) { // if the movie has id, which means this movie has in server already
        //put() to update
        //1. reason why delete _id: in the URL, it has the movie._id already, so , when you 
        // pass the object, you don't want to include the _id property again.
        //2. reason why use data={...movie} instead delete _id property directly:
        // in movieForm.jsx, the movie is pass as "this.state.data", and you don't want to update
        // the state directly, NEVER DO THIS.
        //So you copy it and modify it.
        const body = { ...movie }
        delete body._id;
        return http.put(movieUrl(movie._id), body);

    } else { //if the movie doesn't have id, which means this movie is a new movie, then use post()
        return http.post(apiEndPoint, movie);
    }
}
import axios from 'axios';
import logger from "./logServices";
import { toast } from "react-toastify";


//problem raise: when server need auth, we get 401 unathorized
//we need to pass the header: hey whenever you want to send a http request, remmember to include the header
//common means you can do all http request: post, get, put, delete
// axios.defaults.headers.common['x-auth-token'] = auth.getJWT();
//but this raise another problem: Bi-directional Dependencies: like this "http"->"auth", "http"<-"auth";
//first, we gonna determine which is the core module: HTTP, instead to ask auth to give us something, we can 
//let it to push something to us
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpect error occured");
    }

    return Promise.reject(error); //either way , we need to return it
});

function setJWT(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}


export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    setJWT
}
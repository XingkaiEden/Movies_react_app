import http from "./httpServices";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";


const apiEndPoint = apiUrl + "/auth";

export async function login(email, password) {

    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    //posted the entered username and password into server, then
    // store the json web token(jwt) into localstorage
    localStorage.setItem("token", jwt);
}
export function logout() {
    localStorage.removeItem("token");
}

export function logUserWithJWT(jwt) {
    localStorage.setItem("token", jwt);
}
export function getJWT() {

    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);


    } catch (error) {
        return null;
    }
}

export default {
    login,
    logout,
    logUserWithJWT,
    getJWT
}
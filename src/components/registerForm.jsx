import React from 'react';
import Form from './common/form';
import joi from "joi-browser";
import * as userService from '../services/userService'; //import all functions from userService
import auth from "../services/authService";

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        error: {}
    }
    schema = {
        username: joi.string().email().required().label("Username"),
        password: joi.string().min(5).required().label("Password"),
        name: joi.string().required()
    }
    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            auth.logUserWithJWT(response.headers["x-auth-token"]);
            window.location = ("/");
            // this.props.history.push("/");
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.error };
                errors.username = ex.response.data;
                this.setState({ error: errors });
            }
        }
    };
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
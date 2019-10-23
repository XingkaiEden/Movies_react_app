import React from 'react';
import joi from 'joi-browser';
import Form from './common/form';
import { login } from "../services/authService";


class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        error: {}
    }
    schema = { //is used to determing how to validate the form input, not reusable
        username: joi.string().required().label("Username"),
        password: joi.string().required().label("Password")
    }


    doSubmit = async () => { // when submit, deal server in here
        try {
            const data = this.state.data;
            const { data: jwt } = await login(data.username, data.password);
            //posted the entered username and password into server, then
            // store the json web token(jwt) into localstorage
            localStorage.setItem("token", jwt);
            window.location = ("/"); //refresh page fully
            // this.props.history.push("/");
        } catch (ex) {
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
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}

                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
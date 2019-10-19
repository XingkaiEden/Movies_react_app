import React, { Component } from 'react';
import joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        error: {}
    }
    schema = { //is used to determing how to validate the form input, not reusable
        username: joi.string().required().label("Username"),
        password: joi.string().required().label("Password")
    }


    doSubmit = () => { // when submit, deal server in here
        //call the server
        console.log("submit");
    }


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
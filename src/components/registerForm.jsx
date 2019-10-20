import React from 'react';
import Form from './common/form';
import joi from "joi-browser";

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
    doSubmit = () => {
        console.log("Submit")
    }
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
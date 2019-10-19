import React, { Component } from 'react';
import Input from './input';
import joi from 'joi-browser';

class LoginForm extends Component {
    state = {
        account: { username: "", password: "" },
        error: {}
    }
    schema = {
        username: joi.string().required().label("Username"),
        password: joi.string().required().label("Password")
    }
    validate = () => {
        const option = { abortEarly: false };
        const result = joi.validate(this.state.account, this.schema, option);
        // joi.validate([object we want to validate], [validation schema],{abortEarly})
        if (!result.error) return null; //if no error, return null

        const error = {}; // set error object in state
        //iterate the "details" array to get output
        result.error.details.map(item =>
            error[item.path[0]] = item.message
            //item.path[0] gives the property name of error, and item.message gives the error message
        );

        return error;

    }
    handleSubmit = e => {
        e.preventDefault();

        const error = this.validate();
        console.log(error);
        this.setState({ error: error || {} }) // if error === null, then error = {}
        if (error) return;

        console.log("submit");
    }
    validateProperty = ({ name, value }) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required";
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required";
        }

    }
    handleChange = ({ currentTarget: input }) => {
        const error = { ...this.state.error }; //copy error in state
        const errorMessage = this.validateProperty(input); // pass the input(input tage) to another function
        if (errorMessage) error[input.name] = errorMessage; // set the property of error according to input.name, to errorMessage.
        else delete error[input.name];// if there is no errorMessage, delete the property of error according to input.name 


        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }
    render() {
        const { account, error } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                    <Input
                        autoFocus
                        name="username"
                        label="Username:"
                        value={account.username}
                        onChange={this.handleChange}
                        error={error.username}
                    />
                    <Input
                        name="password"
                        label="Passowrd"
                        value={account.password}
                        onChange={this.handleChange}
                        error={error.password}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
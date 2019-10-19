import React, { Component } from 'react';
import Input from './common/input';
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
        const { data, error } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                    <Input
                        autoFocus
                        name="username"
                        label="Username:"
                        value={data.username}
                        onChange={this.handleChange}
                        error={error.username}
                    />
                    <Input
                        name="password"
                        label="Passowrd"
                        value={data.password}
                        onChange={this.handleChange}
                        error={error.password}
                    />
                    <button
                        disabled={this.validate()}
                        type="submit"
                        className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
import React, { Component } from 'react';
import Input from './input';

class LoginForm extends Component {
    state = {
        account: { username: "", password: "" },
        error: {}
    }
    validate = () => {
        const error = {};
        const { account } = this.state;
        if (account.username.trim() === "") // .trim() is used to remove space from both ends of string
            error.username = "Username is required";
        if (account.password.trim() === "")// beacuse we don't want "     " become input
            error.password = "Password is reuqired";
        return Object.keys(error).length === 0 ? null : error; // determine if error occur

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
        if (errorMessage) error[input.name] = errorMessage;
        else delete error[input.name];


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
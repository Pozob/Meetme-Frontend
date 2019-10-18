import React       from "react";
import Joi         from "joi-browser";
import Form        from "../../common/form";
import authService from "../../../services/authService";
import { toast } from "react-toastify";

class LoginForm extends Form {
    state = {
        data: {username: "", password: ""},
        errors: {}
    };
    
    schema = {
        username: Joi.string().min(5).required(),
        password: Joi.string().min(5).required()
    };
    
    submit = () => {
        const {username, password} = this.state.data;
        authService.login(username, password).then(() => {
            const { state } = this.props.location;
            if(state) return window.location = state.from.pathname;
            window.location = "/";
        })
            .catch(err => {
                console.log("Login Error", err.response);
                toast.error(err.response.data);
            });
    };
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', "Nutzername", {autoFocus: true})}
                    {this.renderInput("password", "Password", {type: "password"})}
                    {this.renderSubmitButton("Login")}
                </form>
            </React.Fragment>
        );
    }
}

export default LoginForm;
import React       from "react";
import Joi         from "joi-browser";
import Form        from "../../common/form/form";
import authService from "../../../services/authService";

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
        authService.login(username, password).then(() => window.location = "/");
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
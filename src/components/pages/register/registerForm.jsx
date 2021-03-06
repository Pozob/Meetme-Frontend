import React             from "react";
import Joi               from "joi-browser";
import Form              from "../../common/form";
import { registerUser }  from "../../../services/userService";
import departmentService from "../../../services/departmentService";
import authService       from "../../../services/authService";

class RegisterForm extends Form {
    state = {
        data: {username: "", password: "", email: "", name: "", department: ""},
        errors: {},
        departments: []
    };
    
    schema = {
        username: Joi.string().min(5).required(),
        password: Joi.string().min(5).required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        name: Joi.string().required(),
        department: Joi.string().required()
    };
    
    submit = async() => {
        try {
            const user = await registerUser(this.state.data);
            authService.loginWithToken(user.headers["x-webtoken"]);
            window.location = "/"; // Redirect with full reload
        } catch(e) {
        
        }
    };
    
    async componentDidMount() {
        const {data: departments} = await departmentService.getDepartments();
        this.setState({departments});
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Nutzername",{autoFocus: true,})}
                    {this.renderInput("password", "Passwort", {type: "password"})}
                    {this.renderInput("email", "E-Mail", {type: "email"})}
                    {this.renderInput("name", "Name",)}
                    {this.renderSelect("department", "Abteilung", this.state.departments)}
                    {this.renderSubmitButton("Registrieren")}
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
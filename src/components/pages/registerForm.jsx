import React                                 from "react";
import Joi                                   from "joi-browser";
import Form                                  from "../common/form/form";
import { registerUser }                      from "../../services/userService";
import departmentService                     from "../../services/departmentService";

class RegisterForm extends Form {
    state = {
        data: {username: "", password: "", email: "", name: "", department: ""},
        errors: {},
        departments: []
    };
    
    schema = {
        username: Joi.string().alphanum().min(3).required(),
        password: Joi.string().min(5).required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        name: Joi.string().alphanum().required(),
        department: Joi.string().required()
    };
    
    submit = async() => {
        // console.log("Submit pressed");
        // const user = await registerUser(this.state.data);
        // console.log("User:", user);
    };
    
    async componentDidMount() {
    
    }
    
    render() {
        return (
            <React.Fragment>
                {this.renderInput("username", "Nutzername",{autoFocus: true})}
                {this.renderInput("password", "Passwort", {type: "password", s:6})}
                {this.renderInput("email", "E-Mail", {type: "email"})}
                {this.renderInput("name", "Name",)}
                {this.renderSelect("department", "Abteilung", this.state.departments)}
                {this.renderSubmitButton("Registrieren")}
            </React.Fragment>
        );
    }
}

export default RegisterForm;
import React from "react";
import Form from "../../common/form";
import authService from "../../../services/authService";
import { saveUser } from "../../../services/userService";
import departmentService from "../../../services/departmentService";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class EditProfileForm extends Form {
    state = {
        data: {id: "", name: "", email: "", department: ""},
        errors: {},
        departments: []
    };
    
    schema = {
        // password: Joi.string().min(5).required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        name: Joi.string().required(),
        department: Joi.string().required()
    };
    
    user = authService.getCurrentUser();
    
    loadUser = () => {
        const {user} = this;
        
        const userData = {
            name: user.name,
            email: user.email,
            department: user.department._id
        };
        this.setState({data: userData});
    };
    loadDepartments = () => {
        departmentService.getDepartments().then(({data: departments}) => {
            this.setState({departments});
        });
    };
    
    componentDidMount() {
        this.loadUser();
        this.loadDepartments();
    }
    
    submit() {
        saveUser(this.user._id, this.state.data).then(({headers}) => {
            const token = headers['x-webtoken'];
            authService.loginWithToken(token);
            this.props.onUserUpdate();
            toast.success('Änderungen gespeichert');
            this.props.history.replace('/');
        }).catch(err => {
            console.log("Error",err);
            // toast.error(err.response.data);
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h5>Profildaten ändern</h5>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "E-Mail", {type: "email"})}
                    {this.renderSelect("department", "Abteilung", this.state.departments)}
                    {this.renderSubmitButton("Änderungen speichern")}
                    
                    {/*//TODO: Implement Passwort changing*/}
                    <h5>Passwort ändern</h5>
                    {this.renderInput("password", "Neues Passwort")}
                    {this.renderInput("passwordrepeat", "Neues Passwort wiederholen")}
                    {this.renderSubmitButton("Passwort ändern")}
                </form>
            </React.Fragment>
        );
    }
}

export default EditProfileForm;
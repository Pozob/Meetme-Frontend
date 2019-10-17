import React        from 'react';
import { Redirect } from "react-router-dom";
import RegisterForm from "./register/registerForm";
import authService from "../../services/authService";

const Register = () => {
    if(authService.getCurrentUser()) return <Redirect to={"/"}/>;
    return (
        <React.Fragment>
            <h3>Registrieren</h3>
            <RegisterForm />
        </React.Fragment>);
};

export default Register;

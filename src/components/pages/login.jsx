import React        from 'react';
import { Redirect } from "react-router-dom";
import LoginForm    from "./login/loginForm";
import authService from "../../services/authService";

const Login = (props) => {
    //Prevent a logged in User, to acces the Login Page
    if(authService.getCurrentUser()) return <Redirect to={"/"}/>;
    return (
        <React.Fragment>
            <h3>Login</h3>
            <LoginForm {...props} />
        </React.Fragment>
    );
};

export default Login;

import React        from 'react';
import LoginForm    from "./login/loginForm";

const Login = (props) => {
    return (
        <React.Fragment>
            <h3>Login</h3>
            <LoginForm {...props} />
        </React.Fragment>
    );
};

export default Login;

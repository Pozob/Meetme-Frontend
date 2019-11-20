import React from 'react';
import { Route, Redirect } from "react-router-dom";
import authService from "../../services/authService";

const ProtectedRoute = ({roles, path, component: Component, render, ...rest}) => {
    const user = authService.getCurrentUser();
    
    const userHasRoles = () => {
        return roles.some(role => {
            return user.roles.find(userrole => role === userrole);
        });
    };
    
    return (
        <Route path={path} {...rest} render={props => {
            //If the user it not logged in, we redirect them to the loggin page. Also give the login Page the current page, so we can redirect the user here again
            if(!user) return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>;
            
            //If the user is logged in, check if he has the needed roles to procced
            if(!userHasRoles()) return <Redirect to="/not-found"/>;
            
            //If we get to here, the user can pass to the Site he wishes
            //Dependent on whether we got a Component to render, we render this, or the given render method
            return Component ? <Component {...props} /> : render(props);
        }} />
    );
};

ProtectedRoute.defaultProps = {
    roles: []
};

export default ProtectedRoute;
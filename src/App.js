import "core-js"; //Support for older browsers....
import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import authService from "./services/authService";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protecedRoute";
import Navbar from "./components/common/navbar";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import Logout from "./components/pages/logout";
import NotFound from "./components/pages/not-found";
import Profile from "./components/pages/profile";

class App extends Component {
    state = {};
    
    componentDidMount() {
        const user = authService.getCurrentUser();
        this.setState({user});
    }
    
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <Navbar/>
                <main className="container">
                    <Switch>
                        <Route path={"/register"} component={Register} />
                        <Route path={"/login"} component={Login} />
                        <Route path={"/logout"} component={Logout} />
                        <ProtectedRoute path={"/profile"} component={Profile} />
                        <Route path={"/not-found"} component={NotFound} />
                        <Redirect to={"/not-found"} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;

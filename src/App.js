import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import authService from "./services/authService";
import Login from "./components/pages/login";
import './App.css';
import Navbar from "./components/common/navbar";

class App extends Component {
    state = {};
    
    componentDidMount() {
        const user = authService.getCurrentUser();
        this.setState({user});
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <Switch>
                        <Route path={"/login"} component={Login} />
                        <Redirect to={"/login"} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;

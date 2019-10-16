import "core-js"; //Support for older browsers....
import React, { Component }        from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import authService                 from "./services/authService";
import Navbar                      from "./components/common/navbar";
import Register                    from "./components/pages/register";
import Login                       from "./components/pages/login";
import './App.css';

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
                        <Route path={"/register"} component={Register} />
                        <Route path={"/login"} component={Login} />
                        <Redirect from={"/"} to={"/login"} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;

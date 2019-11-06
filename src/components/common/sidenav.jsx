import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import authService from "../../services/authService";

class Sidenav extends Component {
    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }
    
    closeSidenav = () => {
        const sidenav = M.Sidenav.getInstance(this.sidenav);
        sidenav.close();
    };
    
    render() {
        const user = authService.getCurrentUser();
        return (
            <React.Fragment>
                <ul ref={sidenav => this.sidenav = sidenav} id="slide-out" className="sidenav">
                    {!user && (
                        <React.Fragment>
                            <li><NavLink onClick={this.closeSidenav} to={'/login'}>Login</NavLink></li>
                            <li><NavLink onClick={this.closeSidenav} to={"/register"}>Registrieren</NavLink></li>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                            <li><NavLink onClick={this.closeSidenav} to={'/profile'}>{user.name}</NavLink></li>
                            <li><NavLink onClick={this.closeSidenav} to={'/meetings'}>Meetings</NavLink></li>
                            <li><NavLink onClick={this.closeSidenav} to={"/rooms"}>Raumverwaltung</NavLink></li>
                            <li><NavLink onClick={this.closeSidenav} to={'/logout'}>Logout</NavLink></li>
                        </React.Fragment>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default Sidenav;

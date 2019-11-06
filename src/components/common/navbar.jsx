import React from 'react';
import { Link, NavLink } from "react-router-dom";
import authService from "../../services/authService";
import Sidenav from "./sidenav";

const Navbar = () => {
    const user = authService.getCurrentUser();
    return (
        <React.Fragment>
            <nav className="blue-grey darken-2">
                <div className="nav-wrapper container">
                    <Link to={"#"} data-target="slide-out" className="sidenav-trigger hide-on-large-and-up"><i className="material-icons">menu</i></Link>
                    <Link className={"brand-logo"} to={'/'}>MeetMe</Link>
                    <ul className="right  hide-on-med-and-down">
                        {!user && (
                            <React.Fragment>
                                <li><NavLink to={'/login'}>Login</NavLink></li>
                                <li><NavLink to={"/register"}>Registrieren</NavLink></li>
                            </React.Fragment>
                        )}
                        {user && (
                            <React.Fragment>
                                <li><NavLink to={'/profile'}>{user.name}</NavLink></li>
                                <li><NavLink to={'/meetings'}>Meetings</NavLink></li>
                                <li><NavLink to={"/rooms"}>Raumverwaltung</NavLink></li>
                                <li><NavLink to={'/logout'}>Logout</NavLink></li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </nav>
            <Sidenav/>
        </React.Fragment>
    );
};

export default Navbar;

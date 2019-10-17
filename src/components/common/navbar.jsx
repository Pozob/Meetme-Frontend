import React from 'react';
import { Link, NavLink } from "react-router-dom";
import authService from "../../services/authService";

const Navbar = () => {
    const user = authService.getCurrentUser();
    return (
        <nav className="blue-grey darken-2">
            <div className="nav-wrapper container">
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
    );
    
    
};

export default Navbar;

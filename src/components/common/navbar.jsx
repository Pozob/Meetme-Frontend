import React from 'react';
import { Link, NavLink } from "react-router-dom";
import authService from "../../services/authService";

const Navbar = () => {
    
    const user = authService.getCurrentUser();
    console.log(user);
    return (
        <nav>
            <div className="nav-wrapper">
                <Link className={"brand-logo"} to={'/'}>Logo</Link>
                <ul className={"right"}>
                    {!user && (
                        <React.Fragment>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={"/register"}>Registrieren</NavLink></li>
                        </React.Fragment>
                    )}
                    {user}
                </ul>
            </div>
        </nav>
    );
    
    
};

export default Navbar;

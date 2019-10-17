import React, { Component } from "react";
import authService from "../../services/authService";

class Profile extends Component {
    state = {
        user: {}
    };
    
    componentDidMount() {
        const user = authService.getCurrentUser();
        this.setState({user});
    };
    
    render() {
        return (
            <React.Fragment>
                <h3>Profil</h3>
            </React.Fragment>
        );
    }
}

export default Profile;
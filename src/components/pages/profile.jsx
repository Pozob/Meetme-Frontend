import React, { Component } from "react";
import EditProfileForm from "./profile/editProfileForm";

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Profil</h3>
                <EditProfileForm onUserUpdate={this.props.handleUpdateUser} {...this.props} />
            </React.Fragment>
        );
    }
}

export default Profile;
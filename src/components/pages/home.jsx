import React, { Component } from "react";
import authService from "../../services/authService";
import meetingService from "../../services/meetingService";
import UserGreeting from "./home/userGreeting";
import UpcomingMeetings from "./home/upcomingMeetings";

class Home extends Component {
    state = {
        user: {},
        upcomingMeetings: [],
    };
    
    constructor(props) {
        super(props);
        this.state.user = authService.getCurrentUser();
    }
    
    async componentDidMount() {
        let upcomingMeetings = {};
        if(this.state.user) {
            upcomingMeetings = await meetingService.getUpcomingMeetingsForUser(this.state.user);
            upcomingMeetings = upcomingMeetings.data;
        } else {
            upcomingMeetings = {};
        }
        this.setState({upcomingMeetings});
    };
    
    render() {
        return (
            <React.Fragment>
                <UserGreeting user={this.state.user} />
                <UpcomingMeetings meetings={this.state.upcomingMeetings} />
            </React.Fragment>
        );
    }
}

export default Home;
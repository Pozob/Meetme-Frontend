import React, { Component } from "react";
import meetingService from "../../services/meetingService";
import CardPanel from "../common/cardPanel";

class Meeting extends Component {
    state = {
        meetings: []
    };
    
    async componentDidMount() {
        const {data: meetings} = await meetingService.getAllMeetings();
        this.setState({meetings})
    }
    
    render() {
        console.log("Meetings:", this.state.meetings);
        return (
            <React.Fragment>
                <h3>Meetings</h3>
                <div className="row">
                    {this.state.meetings.map(meeting => <div key={meeting._id+"-div"} className={"col s12 m4"}><CardPanel key={meeting._id} cardObj={meeting} /></div>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Meeting;
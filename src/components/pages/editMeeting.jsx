import React, { Component } from "react";
import Heading from "../common/editHeading";
import MeetingForm from "./meetings/meetingForm";

class EditMeeting extends Component {
    state = {
        meeting: {
            participant: []
        }
    };
    
    render() {
        return (
            <React.Fragment>
                <Heading>Meeting</Heading>
                <MeetingForm {...this.props}/>
            </React.Fragment>
        );
    }
}

export default EditMeeting;
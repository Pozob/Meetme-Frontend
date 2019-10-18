import React, { Component } from "react";
import _ from "lodash";
import meetingService from "../../services/meetingService";
import Detail from "../common/detail";
import MeetingParticipants from "./meetings/meetingParticipants";
import authService from "../../services/authService";

class MeetingDetails extends Component {
    state = {
        meeting: {
            participants: []
        },
        userIsParticipating: false
    };
    
    async componentDidMount() {
        const {data: meeting} = await meetingService.get(this.props.match.params.id);
        console.log("Meeting", meeting);
        const userIsParticipating = this.userIsInMeeting(meeting);
        console.log("Parti", userIsParticipating);
        this.setState({meeting, userIsParticipating});
        console.log(this.state);
    }
    
    handleActionButton = () => {
        console.log("Now?", this.state.userIsParticipating);
        // const {meeting} = this.state;
        // meeting.participants = [];
        // this.setState({meeting});
    };
    
    render() {
        const {meeting} = this.state;
        return (
            <React.Fragment>
                <h3>{`Meeting Details für ${meeting.name}`}</h3>
                {this.renderActionButton()}
                
                {this.renderDetails()}
                <MeetingParticipants participants={meeting.participants} />
            </React.Fragment>
        );
    }
    
    renderActionButton = () => {
        let actionText = "Teilnehmen";
        let icon = "keyboard_tab";
        
        if(this.state.userIsParticipating) {
            actionText = "Nicht mehr teilnehmen";
            icon = "directions_run";
        }
        
        return (
            <button onClick={this.handleActionButton} className="waves-effect waves-light btn">
                <i className={"material-icons right"}>{icon}</i>
                {actionText}
            </button>
        );
    };
    
    userIsInMeeting = (meeting) => {
        // Get ID from current User
        const {id} = authService.getCurrentUser();
        const userIsParticipating = meeting.participants.find(p => p._id === id);
        return !!userIsParticipating;
    };
    
    renderDetails = () => {
        return this.meetingDetailsToRender().map((row, index) => {
            return (
                <div key={index} className={"row"}>
                    {row.map(col => <Detail key={col.label} label={col.label} detail={col.content} />)}
                </div>
            )
        });
    };
    
    meetingDetailsToRender = () => {
        const {meeting} = this.state;
        if(meeting === {}) return [];
        
        const room = {};
        const address = {};
    
        //create not required fields
        if(meeting.room) {
            room.label= "Raum";
            room.content = meeting.room.name;
        }
        
        if(meeting.address) {
            address.label= "Addresse";
            address.content = meeting.address;
        }
        
        const model = [
            {
                label: "Name",
                content: meeting.name
            },
            {
                label: "Beschreibung",
                content: meeting.description
            },
            room,
            address,
            {
                label : "Startzeit",
                content : meeting.timestart || "-"
            },
            {
                label: "Dauer",
                content: meeting.duration || "-"
            }
        ];
    
        return _.chunk(model.filter(prop => !_.isEmpty(prop)), 3);
    }
}

export default MeetingDetails;
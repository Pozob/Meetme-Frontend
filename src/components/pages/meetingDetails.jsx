import React, { Component } from "react";
import _ from "lodash";
import meetingService from "../../services/meetingService";
import Detail from "../common/detail";
import MeetingParticipants from "./meetings/meetingParticipants";
import authService from "../../services/authService";
import Heading from "./meetings/editHeading";

class MeetingDetails extends Component {
    state = {
        meeting: {
            participants: []
        },
        userIsParticipating: false
    };
    
    user = {};
    
    async componentDidMount() {
        this.user = authService.getCurrentUser();
        const {data: meeting} = await meetingService.get(this.props.match.params.id);
        const userIsParticipating = this.userIsInMeeting(meeting);
        this.setState({meeting, userIsParticipating});
    }
    
    handleActionButton = () => {
        const isParti = this.state.userIsParticipating;
        isParti ? this.removeCurrentUserFromMeeting() : this.addCurrentUserToMeeting();
        
    };
    
    addCurrentUserToMeeting = () => {
        const oldMeeting = {...this.state.meeting};
        const meeting = {...this.state.meeting};
        meeting.participants.push(this.user);
        
        this.setState({meeting, userIsParticipating: true});
        meetingService.addParticipant(this.state.meeting._id, [this.user._id])
            .catch(err => this.setState({meeting: oldMeeting}))
    };
    
    removeCurrentUserFromMeeting = () => {
        const oldMeeting = {...this.state.meeting};
        const meeting = {...this.state.meeting};
        meeting.participants = this.state.meeting.participants.filter(p => p._id !== this.user._id);
        
        this.setState({meeting, userIsParticipating: false});
        meetingService.removeParticipant(this.state.meeting._id, [this.user._id])
            .catch(err => this.setState({meeting: oldMeeting}));
    };
    
    render() {
        const {meeting} = this.state;
        return (
            <React.Fragment>
                <Heading editLink={"/meetings/edit/"+meeting._id}>{`Meeting Details für ${meeting.name}`}</Heading>
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
        const userIsParticipating = meeting.participants.find(p => p._id === this.user._id);
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
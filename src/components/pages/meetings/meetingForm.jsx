import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import roomService from "../../../services/roomService";
import meetingService from "../../../services/meetingService";
import userService from "../../../services/userService";
import moment from "moment";

class MeetingForm extends Form {
    state = {
        data: {_id: "", name: "", description: "", room: "", address: "", date: "", timestart: "", timeend: "", participants: []},
        errors: {},
        rooms: [],
        newMeeting: true,
        users: []
    };
    
    schema = {
        _id: Joi.string().allow(""),
        name: Joi.string().min(3).required().label("Meeting Name"),
        description: Joi.string().allow("").label("Beschreibung"),
        room: Joi.string().allow(""),
        address: Joi.string().allow(""),
        date: Joi.string(),
        timestart: Joi.string(),
        timeend: Joi.string(),
        participants: Joi.array().items(Joi.string())
    };
    
    async componentDidMount() {
        const {data: rooms} = await roomService.getAll();
        const {data: users} = await userService.getAll();
        this.setState({rooms, users});
        
        const meetingid = this.props.match.params.id;
        
        if(meetingid === "new") return;
        
        const {data: meeting} = await meetingService.get(meetingid);
        if(!meeting) return;
        
        this.setState({data: this.mapModelToView(meeting), newMeeting: false});
    }
    
    mapModelToView = (meeting) => {
        return {
            _id: meeting._id,
            name: meeting.name,
            description: meeting.description,
            room: meeting.room._id,
            date: (meeting.timestart && moment(meeting.timestart).format("DD.MM.YYYY")) || "",
            timestart: (meeting.timestart && moment(meeting.timestart).format("HH:mm")) || "",
            timeend: (meeting.timeend && moment(meeting.timeend).format("HH:mm")) || "",
            participants: meeting.participants.map(user => user._id)
        }
    };
    
    submit = () => {
        const meeting = {...this.state.data};
        delete meeting._id;
        if(!this.state.newMeeting) {
            meetingService.edit(this.props.match.params.id, meeting)
                .then(({data: meeting}) => this.props.history.push(`/meetings/${meeting._id}`))
                .catch(err => console.log("Body", err.response));
        } else {
            meetingService.create(meeting)
                .then(({data: meeting}) => this.props.history.push(`/meetings/${meeting._id}`))
                .catch(err => console.log("Body", err.response));
        }
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Meeting Name", {autoFocus: true})}
                {this.renderInput("description", "Beschreibung")}
                {this.renderSelect("room", "Meeting Raum", this.state.rooms)}
                {this.renderInput("address", "Addresse")}
                {this.renderDatePicker("date", "Datum")}
                {this.renderTimePicker("timestart", "Uhrzeit")}
                {this.renderTimePicker("timeend", "Endzeit")}
                {this.renderLabel("Teilnehmer")}
                {this.renderUserCheckbox(this.state.users, "participants")}
                {this.renderSubmitButton(this.state.newMeeting ? "Anlegen" : "Speichern")}
            </form>
        );
    }
}

export default MeetingForm;
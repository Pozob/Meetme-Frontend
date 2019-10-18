import React, { Component } from "react";
import meetingService from "../../services/meetingService";
import CardPanel from "../common/cardPanel";

class Meeting extends Component {
    state = {
        meetings: []
    };
    
    mapModelToView = () => {
         meetingService.getAll().then(({data: meetings}) => {
             const viewMeetings = meetings.map(meeting => {
                 let description = meeting.description.substr(0, 80);
                 description = description.length === meeting.description.length ? description : description+"...";
                 return {
                     _id: meeting._id,
                     title: meeting.name,
                     content: description,
                     link: {
                         target: "/meetings/"+meeting._id,
                         // label: "Los!"
                     },
                     imageLink: `https://picsum.photos/seed/${meeting._id}/298`
                 };
             });
             this.setState({meetings: viewMeetings})
         });
    };
    
    componentDidMount() {
        this.mapModelToView();
    }
    
    render() {
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
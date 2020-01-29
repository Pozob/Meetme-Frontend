import React, { Component } from "react";
import meetingService from "../../services/meetingService";
import CardPanel from "../common/cardPanel";
import Heading from "../common/editHeading";
import {Link} from "react-router-dom";

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
                     },
                     //imageLink: `https://picsum.photos/seed/${meeting._id}/298`
                 };
             });
             this.setState({meetings: viewMeetings})
         });
    };
    
    renderMeetings = () => {
        return this.state.meetings.map(meeting => <div key={meeting._id+"-div"} className={"col s12 m4"}><CardPanel key={meeting._id} cardObj={meeting} /></div>);
    };
    
    renderNoMeetingsHint = () => {
        return <div><p>Es gibt derzeit keine Meeting in der Zukunft. Klicken Sie bitte <Link to={'/meetings/edit/new'}>hier</Link> um ein neues Meeting zu erstellen</p></div>;
    }
    
    
    componentDidMount() {
        this.mapModelToView();
    }
    
    render() {
        return (
            <React.Fragment>
                <Heading editLink={"/meetings/edit/new"} editIcon={'add'}>Meetings</Heading>
                <div className="row">
                    {this.state.meetings.length > 0 ? this.renderMeetings() : this.renderNoMeetingsHint()}
                </div>
            </React.Fragment>
        );
    }
}

export default Meeting;
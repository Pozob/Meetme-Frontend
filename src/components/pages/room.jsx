import React, { Component } from "react";
import roomService from "../../services/roomService";

class Rooms extends Component {
    state = {};
    
    componentDidMount() {
        const {data: rooms} = roomService.getRooms();
        this.setState({rooms});
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Die Meetingräume</h3>
                
            </React.Fragment>
        );
    }
}

export default Rooms;
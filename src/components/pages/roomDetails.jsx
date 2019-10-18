import React, { Component } from "react";
import roomService from "../../services/roomService";
import Detail from "../common/detail";

class RoomDetail extends Component {
    state = {
        room: {}
    };
    
    componentDidMount() {
        roomService.get(this.props.match.params.id)
            .then(({data: room}) => this.setState({room}));
    }
    
    render() {
        const {room} = this.state;
        return (
            <React.Fragment>
                <h3>{`Details für ${room.name}`}</h3>
                <div className="row">
                    <Detail label={"Name"} detail={room.name} />
                    <Detail label={"Sitzplätze"} detail={room.seatsize} />
                </div>
            </React.Fragment>
        );
    }
}

export default RoomDetail;
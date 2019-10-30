import React, { Component } from "react";
import roomService from "../../services/roomService";
import Detail from "../common/detail";
import Heading from "../common/editHeading";

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
                <Heading editLink={`/rooms/edit/${room._id}`}>{`Details für ${room.name}`}</Heading>
                <div className="row">
                    <Detail label={"Name"} detail={room.name} />
                    <Detail label={"Sitzplätze"} detail={room.seatsize} />
                    <Detail label={"Ausrüstung"} detail={room.equipment} />
                </div>
            </React.Fragment>
        );
    }
}

export default RoomDetail;
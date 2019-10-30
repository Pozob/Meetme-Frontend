import React, { Component } from "react";
import roomService from "../../services/roomService";
import CardPanel from "../common/cardPanel";
import Heading from "../common/editHeading";

class Rooms extends Component {
    state = {
        rooms: []
    };
    
    mapModelToView = () => {
        roomService.getAll().then(({data: rooms}) => {
            const viewRooms = rooms.map(rooms => {
                return {
                    _id: rooms._id,
                    title: rooms.name,
                    content: `Sitzplätze: ${rooms.seatsize}`,
                    link: {
                        target: "/rooms/"+rooms._id,
                        label: "Details"
                    },
                    imageLink: `https://picsum.photos/seed/${rooms._id}/298`
                };
            });
            this.setState({rooms: viewRooms})
        });
    };
    
    componentDidMount() {
        this.mapModelToView();
    }
    
    render() {
        return (
            <React.Fragment>
                <Heading editLink={"/rooms/edit/new"}>Die Meetingräume</Heading>
                <div className="row">
                    {this.state.rooms.map(room => <div key={room._id+"-div"} className={"col s12 m6 l4"}><CardPanel key={room._id} cardObj={room} /></div>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Rooms;
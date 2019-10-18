import React, { Component } from "react";
import roomService from "../../services/roomService";
import CardPanel from "../common/cardPanel";

class Rooms extends Component {
    state = {
        rooms: []
    };
    
    mapModelToView = () => {
        roomService.getRooms().then(({data: rooms}) => {
            const viewRooms = rooms.map(rooms => {
                return {
                    _id: rooms._id,
                    title: rooms.name,
                    content: `Sitzplätze: ${rooms.seatsize}`,
                    link: {
                        target: "/rooms/"+rooms._id,
                        label: "Raum bearbeiten"
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
                <h3>Die Meetingräume</h3>
                <div className="row">
                    {this.state.rooms.map(room => <div className={"col s4"}><CardPanel cardObj={room} /></div>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Rooms;
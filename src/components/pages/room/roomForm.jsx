import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import roomService from "../../../services/roomService";

class RoomForm extends Form {
    state = {
        data: {_id: "", name: "", seatsize: 5, equipment: ""},
        errors: {},
    };
    
    schema = {
        _id: Joi.string().min(8).max(8).allow(""),
        name: Joi.string().required(),
        seatsize: Joi.number().required(),
        equipment: Joi.string().allow("")
    };
    
    createUpdateRoom = (room) => {
        const id = room._id;
        delete room._id;
        if(!id) {
            return roomService.create(room);
        } else {
            return roomService.edit(id, room);
        }
    };
    
    submit = () => {
        this.createUpdateRoom(this.state.data)
            .then(({data: room}) => this.props.history.push(`/rooms/${room._id}`))
            .catch(err => console.log(err.response));
    };
    
    async componentDidMount() {
        const id = this.props.match.params.id;
        
        if(id === "new") return;
        const {data: room} = await roomService.get(id);
        
        this.setState({data: this.mapModelToView(room)});
    }
    
    mapModelToView = room => {
        return {
            _id: room._id,
            name: room.name,
            seatsize: room.seatsize,
            equipment: room.equipment
        };
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("name","Raumname", {autoFocus: true})}
                {this.renderRangeSlider("seatsize", "Sitzplätze", 2, 20)}
                {this.renderInput("equipment", "Ausrüstung")}
                {this.renderSubmitButton("Abschicken")}
            </form>
        );
    }
}

export default RoomForm;
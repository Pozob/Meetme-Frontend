import React from 'react';
import Heading from "../common/editHeading";
import RoomForm from "./room/roomForm";

const EditRoom = (props) => {
    return (
        <React.Fragment>
            <Heading>Raum</Heading>
            <RoomForm {...props} />
        </React.Fragment>
    );
};

export default EditRoom;
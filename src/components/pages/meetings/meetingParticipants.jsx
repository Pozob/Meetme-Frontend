import React from 'react';
import Chip from "../../common/chip";

const MeetingParticipants = ({participants}) => {
    return (
        <div className="row">
            <div className="col s12">
                <label style={{display: "block"}}>Teilnehmer</label>
                {participants.map(p => <Chip key={p._id} _id={p._id} img={`https://picsum.photos/seed/${p._id}/50/50`} text={p.name}/>)}
            </div>
        </div>
    );
};

export default MeetingParticipants;

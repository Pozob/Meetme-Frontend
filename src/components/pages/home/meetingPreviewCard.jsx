import React from 'react';
import moment from "moment";
import CardPanel from "../../common/cardPanel";

const MeetingPreviewCard = ({meeting}) => {
    const getContent = () => {
        const startsIn = moment().to(moment(meeting.timestart), true);
        return (
            <span>
                <p>{`Findet statt in ${startsIn}`}</p>
                
                {meeting.room && (
                    <React.Fragment>
                        <p>{`Im ${meeting.room.name}`}</p>
                        {false && meeting.room.seatsize && <p>{`Sitzplätze: ${meeting.room.seatsize}`}</p>}
                    </React.Fragment>
                )}
                {meeting.address && <p>{`Straße: ${meeting.address}`}</p>}
                <p>{`Teilnehmer ${meeting.participants.length}`}</p>
            </span>
        );
    };
    
    const cardObject = {
        title: meeting.name,
        content: getContent(),
        link: {
            target: `/meetings/${meeting._id}`
        }
    };
    
    return (
        <React.Fragment>
            <div className="col s12 m4">
                <CardPanel cardObj={cardObject} />
            </div>
        </React.Fragment>
    );
};

export default MeetingPreviewCard;

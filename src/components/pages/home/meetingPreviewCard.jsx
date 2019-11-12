import React from 'react';
import CardPanel from "../../common/cardPanel";

const MeetingPreviewCard = ({meeting}) => {
    const cardObject = {
        title: meeting.name,
        content: meeting.description,
        link: {
            label: "Zum Meeting",
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

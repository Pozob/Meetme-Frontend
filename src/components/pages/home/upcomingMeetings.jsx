import React from 'react';
import MeetingPreviewCard from "./meetingPreviewCard";

const UpcomingMeetings = ({meetings}) => {
    return (
        <React.Fragment>
            <div className="row">
                {meetings.map(meeting => <MeetingPreviewCard key={meeting._id} meeting={meeting} />)}
            </div>
        </React.Fragment>
    );
};

export default UpcomingMeetings;

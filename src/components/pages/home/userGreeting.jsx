import React from 'react';
import {Link} from "react-router-dom";

const UserGreeting = ({user, meetingBooked}) => {
    return (
        <React.Fragment>
            {!user && (
                <React.Fragment>
                    <h3>Willkommen</h3>
                    <p>Bitte melden Sie sich an oder erstellen sie einen neuen Account um die Webseite vollständig nutzen zu können.</p>
                </React.Fragment>
            )}
            {user && (
                <React.Fragment>
                    <h3>{`Wilkommen ${user.name}`}</h3>
                    {meetingBooked && <p>Nachfolgend siehen Sie alle zukünftigen Meetings, an denen Sie teilnehmen:</p>}
                    {!meetingBooked && <p>Sie haben sich noch in keinem Meeting eingetragen. <br /><Link to={"/meetings"}>Hier</Link> können Sie ein neues anlegen oder in einem bestehenden beitreten.</p>}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default UserGreeting;

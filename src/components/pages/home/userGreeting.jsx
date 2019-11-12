import React from 'react';

const UserGreeting = ({user}) => {
    return (
        <React.Fragment>
            {!user && (
                <React.Fragment>
                    <h3>Wilkommen</h3>
                    <p>Bitte melden Sie sich an oder erstellen sie einen neuen Account um die Webseite vollständig nutzen zu können.</p>
                </React.Fragment>
            )}
            {user && (
                <React.Fragment>
                    <h3>{`Wilkommen ${user.name}`}</h3>
                    <p>Nachfolgend siehen Sie alle Ihre Meetings an denen Sie teilnehmen.</p>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default UserGreeting;

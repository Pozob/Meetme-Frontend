import React from 'react';
import {Link} from "react-router-dom";

const Heading = ({children, editLink}) => {
    return (
        <React.Fragment>
            <h3>
                {children}
                {editLink && <Link to={editLink} style={{marginLeft: "15px"}} className={"btn-floating"}><i className={"material-icons"}>create</i></Link>}
            </h3>
        </React.Fragment>
    );
};

Heading.defaultProps = {
    editLink: ""
};

export default Heading;
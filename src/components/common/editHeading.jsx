import React from 'react';
import {Link} from "react-router-dom";
import Icon from "./icon";

const Heading = ({children, editLink, deleteLink, editIcon = "create", deleteIcon = "delete"}) => {
    return (
        <React.Fragment>
            <h3>
                {children}
                {editLink && <Link to={editLink} style={{marginLeft: "15px"}} className={"btn-floating"}><Icon icon={editIcon} /></Link>}
                {deleteLink && <Link to={deleteLink} style={{marginLeft: "15px"}} className={"btn-floating red"}><Icon icon={deleteIcon} /></Link>}
            </h3>
        </React.Fragment>
    );
};

Heading.defaultProps = {
    editLink: ""
};

export default Heading;
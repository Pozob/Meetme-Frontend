import React from 'react';
import { Link } from "react-router-dom";

const CardPanel = ({cardObj}) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-image">
                    <img src="https://picsum.photos/300" alt="" />
                    <span className="card-title">{cardObj.name}</span>
                </div>
                <div className="card-content">
                    <p>{cardObj.description}</p>
                </div>
                <div className="card-action">
                    <Link to={"/meetings/" + cardObj._id}>Details</Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CardPanel;

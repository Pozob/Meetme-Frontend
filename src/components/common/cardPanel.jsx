import React from 'react';
import {Link} from "react-router-dom";

const CardPanel = ({cardObj}) => {
    const {title, content, imageLink, link} = cardObj;
    return (
        <div className="card hoverable">
            {imageLink && (
                <div className="card-image">
                    <img src={imageLink} alt=""/>
                </div>)}
            <div className="card-content">
                {title && <span className="card-title">{title}</span>}
                <p>{content}</p>
            </div>
            {link && (
                <div className="card-action">
                    <Link to={link.target}>{link.label}</Link>
                </div>
            )}
        </div>
    );
};

export default CardPanel;
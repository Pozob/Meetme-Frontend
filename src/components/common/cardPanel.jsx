import React from 'react';
import { Link } from "react-router-dom";

const CardPanel = ({cardObj}) => {
    const {title, content, imageLink, link} = cardObj;
    return (
        <Link to={link.target}>
            <div className="card hoverable">
                {imageLink && (
                    <div className="card-image">
                        <img src={imageLink} alt="" />
                    </div>)}
                <div className="card-content black-text">
                    {title && <span className="card-title">{title}</span>}
                    <span>{content}</span>
                </div>
                {link.label && (
                    <div className="card-action">
                        <span>{link.label}</span>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default CardPanel;
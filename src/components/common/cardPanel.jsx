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
                    <p>{content}</p>
                </div>
                {link.label && (
                    <div className="card-action">
                        <Link to={link.target}>{link.label}</Link>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default CardPanel;
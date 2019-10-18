import React from 'react';

const Detail = ({detail, label, options, ...rest}) => {
    const defaultOptions = {
        width: "s12 m6 l4"
    };
    const settings = {...defaultOptions, ...options};
    
    return (
        <React.Fragment>
            <div {...rest} className={`col ${settings.width}`}>
                <label>{label}</label>
                <p>{detail}</p>
            </div>
        </React.Fragment>
    );
};

Detail.defaultProps = {
    options: {}
};

export default Detail;

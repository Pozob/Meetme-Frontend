import React from 'react';

const InputField = ({name, label, error, s, ...rest}) => {
    const getClasses = () => {
        let className = "input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    
    return (
        <div className={getClasses()}>
            <input name={name} id={name} {...rest}/>
            <label htmlFor={name}>{label}</label>
        {/*    TODO: Display Errors*/}
        </div>
    );
};

InputField.defaultProps = {
    type: 'text',
    s: ""
};

export default InputField;

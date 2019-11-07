import React from 'react';

const InputField = ({name, label, error, s, ...rest}) => {
    const getClasses = () => {
        let className = "input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    console.log(error);
    return (
        <div className={getClasses()}>
            <input className={(error && "invalid")} name={name} id={name} {...rest}/>
            <label htmlFor={name}>{label}</label>
            <span className="helper-text" data-error={error} />
        </div>
    );
};

InputField.defaultProps = {
    type: 'text',
    s: ""
};

export default InputField;

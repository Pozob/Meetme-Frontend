import React from 'react';

const InputField = ({name, label, error, s, m, ...rest}) => {
    const getClasses = () => {
        let className = "input-field ";
        className += s || m ? `col ${s} ${m}` : "";
        return className;
    };
    
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
    s: "",
};

export default InputField;

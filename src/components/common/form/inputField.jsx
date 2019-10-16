import React from 'react';

const InputField = ({name, label, error, s, ...rest}) => {
    return (
        <div className={`input-field col ${s}`}>
            <input name={name} id={name} {...rest}/>
            <label htmlFor={name}>{label}</label>
        {/*    TODO: Display Errors*/}
        </div>
    );
};

InputField.defaultProps = {
    type: 'text'
};

export default InputField;

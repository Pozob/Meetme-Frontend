import React from 'react';

const SelectField = ({name, label, s, selections, ...rest}) => {
    return (
        <React.Fragment>
            <div className={`input-field coll ${s}`} >
                <select name={name} id={name} {...rest}>
                    <option value="">{label}</option>
                    {selections.map(opt => <option value={opt._id}>{opt.name}</option>)}
                </select>
            </div>
        </React.Fragment>
    );
};

export default SelectField;

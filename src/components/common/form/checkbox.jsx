import React from 'react';

const Checkbox = ({user, selected, ...rest}) => {
    return (
        <React.Fragment>
            <p>
                <label>
                    <input value={user._id} type="checkbox" checked={selected} {...rest} />
                    <span>{user.name}</span>
                </label>
            </p>
        </React.Fragment>
    );
};

export default Checkbox;
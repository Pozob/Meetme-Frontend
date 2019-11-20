import React from 'react';

const Checkbox = ({user, selected, s, m, ...rest}) => {
    return (
        <React.Fragment>
            <span className={"col " + m + s}>
                <label>
                    <input value={user._id} type="checkbox" checked={selected} {...rest} />
                    <span>{user.name}</span>
                </label>
            </span>
        </React.Fragment>
    );
};

Checkbox.defaultProps = {
    s: " s12",
    m: " m3"
};

export default Checkbox;
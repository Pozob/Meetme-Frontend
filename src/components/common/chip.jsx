import React from 'react';

const Chip = ({_id, img, text, closeable, onDelete}) => {
    return (
        <div className={"chip"}>
            {img && <img src={img} alt={text} />}
            {text}
            {closeable && <i onClick={() => onDelete(_id)} className="close material-icons">close</i>}
        </div>
    );
};

Chip.defaultProps = {
    closeable: false
};

export default Chip;

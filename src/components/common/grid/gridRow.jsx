import React from 'react';

const GridRow = () => {
    return (
        <div className="row">
            {this.props.children}
        </div>
    );
};

export default GridRow;

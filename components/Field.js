import React from 'react';
import Row from './Row'

const Field = ({field, handleMove}) => {
    return (
        field.map((row) => 
            <Row rows={row} handleMove={handleMove} />)
    );
};

export default Field;
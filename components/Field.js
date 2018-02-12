import React from 'react';
import Row from './Row'

const Field = ({field, randomMove}) => {
    return (
        field.map((row, i) => 
            <Row key={`row ${i}`} rows={row} randomMove={randomMove} />)
    );
};

export default Field;
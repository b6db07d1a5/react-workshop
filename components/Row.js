import React from 'react';
import Point from './Point';

const Row = ({rows, randomMove}) => {
    return (
        <div>
            {rows.map((point, i) => 
                <Point key={`point ${i}`} count={point} randomMove={randomMove} /> )}
        </div>
    );
};

export default Row;
import React from 'react';
import Point from './Point' 

const Row = ({rows, handleMove}) => {
    return (
        <div>
            {rows.map((point, i) => 
                <Point key={`point ${i}`} letCount={point} handleMove={handleMove} /> )}
        </div>
    );
};

export default Row;
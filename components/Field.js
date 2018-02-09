import React, { Component } from 'react';
import Point from './Point'
class Field extends Component {
    
    render() {
        const { field: el, randomMove } = this.props
        return (
            <div>
                {row(el[0],randomMove)}
                {row(el[1],randomMove)}
                {row(el[2],randomMove)}
            </div>
        );
    }
}

const row = (el, randomMove) => {
    return (
        <div>
            <Point letCount={el[0]} randomMove={randomMove} />
            <Point letCount={el[1]} randomMove={randomMove} />
            <Point letCount={el[2]} randomMove={randomMove} />
        </div> 
    );
};

export default Field;
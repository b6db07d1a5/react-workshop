import React, { Component } from 'react';
import Field from './Field'

class Tank extends Component {

    state = {
        field: [
            [false , false , false ],
            [false , false , false ],
            [false , false , false ],
        ],
        index: {
            x: 1,
            y: 1
        }
    }

    handleJoyStick = (direction, evType) => () => {
        const {x, y} = this.state.index
        switch(direction) {
            case 'up' :
                this.setMove(x-1,y,evType)
            break;
            case 'down' :
                this.setMove(x+1,y,evType)
            break;
            case 'left' :
                this.setMove(x,y-1,evType)
            break;
            case 'right' :
                this.setMove(x,y+1,evType)
            break;
            default:
            break;
        }
    }

    setMove = (x, y, evType) => {
        if((x < 0 || x > 3 -1) || (y < 0 || y > 3 -1)){
            if(evType === 'click'){
                this.setState({
                    index: {
                        x: this.state.index.x,
                        y: this.state.index.y
                    }
                })
            }
            else {
                let ran = Math.floor((Math.random() * 4) + 1)
                this.randomMove(ran)
            }
        }
        else {
            let {field , index} = this.state
            field[index.x][index.y] = false
            field[x][y] = true
            this.setState({
                index: {
                    x: x,
                    y: y
                },
                field: field
            })
        }
    }

    randomMove = (ran) => {
        switch(ran) {
            case 1:
                this.handleJoyStick('up','ran')()
            break;
            case 2:
                this.handleJoyStick('down','ran')()
            break;
            case 3:
                this.handleJoyStick('left','ran')()
            break;
            case 4:
                this.handleJoyStick('right','ran')()
            break;
            default:
            break;
        }
    }
    
    render() {
        return (
            <div>
                <Field field={this.state.field} handleMove={this.randomMove} />
                <div>
                    <button onClick={this.handleJoyStick('up','click')}> up </button>
                    <button onClick={this.handleJoyStick('down','click')}> down </button>
                    <button onClick={this.handleJoyStick('left','click')}> left </button>
                    <button onClick={this.handleJoyStick('right','click')}> right </button>
                </div>
            </div>
        );
    }
}

export default Tank;
import React, { Component } from 'react';

class Percentage extends Component {
    
    state = {
        number: '',
        discount: 0,
        result: 0,
        buttonHover: {
            button1: false,
            button2: false,
            button3: false
        }
    }
    
    handleChange = (e) => {

        let number = e.target.value

        this.setState({
            number: number,
            result: (number - (number * this.state.discount)).toFixed(2)
        })
    }

    handleButton = (args) => () => {
        let hover = {}
        switch(args){
            case 0.2:
                hover = {
                        button1: true,
                        button2: false,
                        button3: false
                    }
                    break;
            case 0.15:
                hover = {
                        button1: false,
                        button2: true,
                        button3: false
                    }
                    break;
            case 0.05:
                hover = {
                        button1: false,
                        button2: false,
                        button3: true
                    }
                    break;
        }
        let number = this.state.number;
        this.setState({
            number: number,
            result: (number - (number * args)).toFixed(2),
            discount: args,
            buttonHover: hover
        })
    }
    styleHover = (args) => {
        return (args? 
            {backgroundColor: 'red'}:
            {backgroundColor: 'white'}
        )
    }

    render() {

        return (
            <div>
                <input onChange={this.handleChange} value={this.state.number} />
                <button onClick={this.handleButton(0.2)} style={this.styleHover(this.state.buttonHover.button1)}> 20% </button>
                <button onClick={this.handleButton(0.15)} style={this.styleHover(this.state.buttonHover.button2)}> 15% </button>
                <button onClick={this.handleButton(0.05)} style={this.styleHover(this.state.buttonHover.button3)}> 5% </button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Percentage;
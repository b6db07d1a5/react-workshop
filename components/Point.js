import React, { Component } from 'react';

class Point extends Component {

    state = {
        countNumber: 3
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            countNumber: 3
        })
        if(nextProps.count){
            clearInterval(timer)
            
            let counterInterval = 3
            let timer = setInterval(()=>{
                this.setState({
                    countNumber: this.state.countNumber - 1
                })
                if(this.state.countNumber < 1){
                    clearInterval(timer);
                    this.props.randomMove()
                }
            }, 1000)
        }
    }
    
    render() {
        return (
            <button style={{width: 10, height: 10}}> 
                {(this.props.count? this.state.countNumber : false)} 
            </button>
        )
    }
}

export default Point;
import React, { Component } from 'react';

class Point extends Component {

    state = {
        count: 3
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            count: 3
        })
        if(nextProps.letCount){
            clearInterval(this.timer)
            
            this.timer = setInterval(()=>{
                this.setState({
                    count: this.state.count - 1
                })
                if(this.state.count < 1){
                    clearInterval(this.timer);
                    this.props.handleMove()
                }
            }, 1000)
        }
    }
    
    render() {
        return (
            <button style={{width: 10, height: 10}}> 
                {(this.props.letCount? this.state.count : false)} 
            </button>
        )
    }
}

export default Point;
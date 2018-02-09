import React, { Component } from 'react';

class Point extends Component {

    state = {
        count: 3
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            count: 3
        })
        if(nextProps.letCount === "X"){
            clearInterval(this.timer)
            
            this.timer = setInterval(()=>{
                this.setState({
                    count: this.state.count - 1
                })
                if(this.state.count < 1){
                    clearInterval(this.timer);
                    let ran = Math.floor((Math.random() * 4) + 1)
                    this.props.randomMove(ran)
                }
            }, 1000)
        }
    }
    
    render() {
        if(this.props.letCount == "X") {
            return (
                <button>
                    {this.state.count}
                </button>
            );
        }
        return(
            <button>
                O
            </button>
        )
    }
}

export default Point;
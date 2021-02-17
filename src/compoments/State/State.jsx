import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            time: props.start
        }
    }

    // Lifecycle
    componentDidMount() {
        this.addInterval = setInterval(() =>  this.incrase(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.addInterval)
    }

    incrase() {
        
        this.setState( (state, props) => ({
            time: parseInt(state.time) + 1
        }) )

    }

    render() {
        return <div>{this.state.time} Detik</div>
    }
}

class State extends Component {
    render() {
        return (
            <div>
                <h2>Timer</h2>
                <Timer start="0" />
                <Timer start="7" />
            </div>
        )
    }
}

export default State

import React, { Component } from 'react'

class EventClick extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleStatus: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState( state => ({
            toggleStatus: !state.toggleStatus
        }) )

        console.log(this.state.toggleStatus)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> {this.state.toggleStatus ? 'ON' : 'OFF'} </button>
            </div>
        )
    }
}

export default EventClick

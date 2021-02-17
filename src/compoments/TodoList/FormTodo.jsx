import React, { Component } from 'react'
import ListTodo from './ListTodo';

export class FormTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todoItem: '',
            items: []
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            items: [...this.state.items, this.state.todoItem],
            todoItem: ''
        })
    }

    handleChange = event => {
        this.setState({
            todoItem: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todoItem} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                
                <ListTodo items={this.state.items}/>
            </div>
        )
    }
}

export default FormTodo

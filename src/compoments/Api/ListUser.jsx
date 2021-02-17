import React, { Component } from 'react'
import Profile from './Profile'

export class ListUser extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            items: [],
            detailItem: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( data => this.setState({
                items: data,
                isLoading: false
            }) )
    }

    handleClick = event => {
        const id_list = event.target.getAttribute('test')
        this.setState({
            detailItem: this.state.items[id_list]
        })
    }

    render() {

        const { items, detailItem, isLoading } = this.state

        if(isLoading){
            return <p>Loading...</p>
        }
 
        return (
            <div>
                <ul>
                    {
                        items.map( (item, index) => 
                            <li onClick={this.handleClick} test={index} key={index}>{ item.name }</li>
                        )
                    }
                </ul>
                
                <Profile items={detailItem} />

            </div>
        )
    }
}

export default ListUser

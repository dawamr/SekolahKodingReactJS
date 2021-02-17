import React, { Component } from 'react'


function Biodata(props) {
    return <span>Umur : {props.age}</span>
}

function Greeet(props) {
    return  <h3>Hallo {props.name } <Biodata age={props.age}/></h3>
}
            
class CompAndProps extends Component {
    render() {
        return (
            <div>
                <Greeet name="Dawam" age="16" /> 
                <Greeet name="Raja" age="18" /> 
                <Greeet name="Habibbulloh"age="19" />
            </div>
        )
    }
}

export default CompAndProps

import React from 'react'

function Profile(props) {
    return (
        <div>
            <hr/>
            <p><b>{props.items.name}</b></p>
            <ul>
                <li>Email : {props.items.email}</li>
                <li>Phone : {props.items.phone}</li>
            </ul>
        </div>
    )
}

export default Profile

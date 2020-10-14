import React from 'react'

export default function Users(props) {
    const {data} = props;
    return (
        <div>
            <h1>from users app</h1>
            <p>{`Username is ${data.username} and E-mail is ${data.email}`}</p>
        </div>
    )
}

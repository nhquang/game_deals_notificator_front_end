import React from 'react'

function Alert(props) {
    return (
        <div className="item">
            <h3>{props.game}</h3>
            <p>Price: ${props.price}</p>
        </div>
    )
}

export default Alert

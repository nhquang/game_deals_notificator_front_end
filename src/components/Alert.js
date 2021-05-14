import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Alert(props) {
    return (
        <div className="item">
            <h3>{props.game} <FaTimes onClick={() => props.onDelete(props.game_id, props.price, props.email)} style={{color:"red", cursor:"pointer"}}/></h3>
            <p>Price: ${props.price}</p>
        </div>
    )
}

export default Alert

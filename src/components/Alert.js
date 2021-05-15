import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Alert(props) {
    return (
        <div className="item" style={{cursor: "auto"}}>
            <h3>{props.game} <FaTimes onClick={() => props.onDelete(props.gameid, props.price, props.email, props.name, props.currency, props.game)} style={{color:"red", cursor:"pointer"}}/></h3>
            <p>Price: {props.currency == 2 && "C"}${props.price}</p>
        </div>
    )
}

export default Alert

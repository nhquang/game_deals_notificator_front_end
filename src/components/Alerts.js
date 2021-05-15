import Alert from './Alert'
import React from 'react'

function Alerts(props) {
    let id = 0;
    return (
        <>
            {props.alerts.map((item) =>(
                <Alert key = {++id} gameid = {item.game_id} name = {item.name} game = {item.game} price = {item.price} email = {item.email} currency = {item.currency} onDelete = {props.onDelete}/>
            ))}
        </>
    )
}

export default Alerts

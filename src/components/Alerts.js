import Alert from './Alert'
import React from 'react'

function Alerts(props) {
    let id = 0;
    return (
        <>
            {props.alerts.map((item) =>(
                <Alert key = {++id} game = {item.game} price = {item.price} currency = {item.currency} />
            ))}
        </>
    )
}

export default Alerts

import React from 'react'
import GetAlerts from './GetAlerts'
import Header from './Header'
import Error from './Error'
import Alerts from './Alerts'

function ManageAlerts(props) {
    
    
    return (
        <>
            <Header title="Manage Your Price Alerts" subtitle="Enter your email to see your submitted price alerts"/>
            <GetAlerts getAlerts = {props.retrieveAlerts} text = {props.emailText} setText ={props.changeEmailText}/>
            <Alerts alerts = {props.alerts} onDelete ={props.deleteAlert}/>
            {props.error && <Error/>}
        </>
    )
}

export default ManageAlerts

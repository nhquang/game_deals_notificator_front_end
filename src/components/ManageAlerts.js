import React from 'react'
import GetAlerts from './GetAlerts'
import Header from './Header'
import {useState} from 'react'
import Error from './Error'
import Alerts from './Alerts'

function ManageAlerts() {
    const [alerts, setAlerts] = useState([]);
    const [error, setError] = useState("")
    const retrieveAlerts = async (email)=>{
        try{
            //const data = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/getnotifications?email=${email}`);
            const data = await fetch(`https://localhost:44371/notifications/getnotifications?email=${email}`);
            const parsed = await data.json();
            if(parsed.status){
                setAlerts(prev => parsed.notifications);
                parsed.notifications.length > 0 ? setError(prev => false) : setError(prev => true);
            }
            else throw parsed;
        }
        catch(err){
            console.log(err.message);
        }
    };
    const deleteAlert = async (game_id, price, email) => {
        try{
            const formatted = {game_id: game_id, email : email, price : price};
            //const data = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/deletenotification`, {method: "POST", headers:{"Content-type" : "application/json"}, body : JSON.stringify(formatted)});
            const data = await fetch(`https://localhost:44371/notifications/deletenotification`, {method: "POST", headers:{"Content-type" : "application/json"}, body : JSON.stringify(formatted)});
            const parsed = await data.json();
            if(parsed.status){
                setAlerts(alerts.filter((item) => item.game_id != game_id && item.price != price));
            }
            else throw parsed;
        }
        catch(err){
            console.log(err.message);
        }

    };
    return (
        <>
            <Header title="Manage Your Price Alerts" subtitle="Enter your email to see your submitted price alerts"/>
            <GetAlerts getAlerts = {retrieveAlerts}/>
            <Alerts alerts = {alerts} onDelete ={deleteAlert}/>
            {error && <Error/>}
        </>
    )
}

export default ManageAlerts

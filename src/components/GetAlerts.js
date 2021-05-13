import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

function GetAlerts(props) {
    const [text, setText] = useState("");
    const submitting = (e)=>{
        e.preventDefault();
        if(text) props.getAlerts(text);
        else alert("Enter a game title!!!");
    }
    return (
        <form className= "add-form" onSubmit={submitting}>
            <div className='form-control'>
                <input type="email" placeholder="Enter your email" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <input type="submit" value ="Search" className="btn btn-block"/>
        </form>
    )
}

GetAlerts.propTypes = {

}

export default GetAlerts


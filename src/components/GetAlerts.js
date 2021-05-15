import React from 'react'

function GetAlerts(props) {
    const submitting = (e)=>{
        e.preventDefault();
        if(props.text) props.getAlerts(props.text);
        else alert("Enter your email!!!");
    };
    return (
        <form className= "add-form" onSubmit={submitting}>
            <div className='form-control'>
                <input type="email" placeholder="Enter your email" value={props.text} onChange={(e) => props.setText(e.target.value)}/>
            </div>
            <input type="submit" value ="Search" className="btn btn-block"/>
        </form>
    )
}

export default GetAlerts


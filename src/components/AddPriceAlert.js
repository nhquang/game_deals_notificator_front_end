import React from 'react'
import {useState} from 'react'

function AddPriceAlert({addPriceAlert, gameID, gameTitle}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currency, setCurrency] = useState(1);
    const [price, setPrice] = useState(0);
    const submitting = (e) => {
        e.preventDefault();
        if(name && email){
            addPriceAlert({name, email, currency, price, gameID, gameTitle});
            setName(prev => "");
            setEmail(prev => "");
            setCurrency(prev => 1);
            setPrice(prev => 0.0);
        }
    };
    return (

        <form className= "add-form" onSubmit={submitting} style={{marginBottom:"20px"}}>
            <div className='form-control'>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <input type="email" placeholder="Enter you email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="price">Alert me when the price is below or close to:</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='form-control'>
            <label htmlFor="currency">Currency:</label>
            <select id="currency" onChange={(e) => setCurrency(e.target.value)}>
                <option value="1">USD</option>
                <option value="2">CAD</option>
            </select>
            </div>

            <input type="submit" value ="Submit" className="btn btn-block"/>
        </form>
    )
}

export default AddPriceAlert

import React from 'react';
import Deal from './Deal';

function Deals(props) {
    const redirectURL = "https://www.cheapshark.com/redirect?dealID=";
    return (
        <div className="deals" style={{ padding: "0px 20px 20px 20px",marginBottom:"20px", marginLeft:"auto", marginRight:"auto", width:"55%", borderRadius:"10px", borderWidth:"1px",borderStyle:"solid", height: "200px", overflow: "auto"}}>
            <h3 style={{textAlign:"center"}}>Current Prices</h3>
            <p style={{fontSize:"13px", textAlign:"center", marginBottom:"10px"}}>* US dollar ~ Canadian dollar</p>
            {props.deals.map((item) =>(
                <Deal key = {item.dealID} storeName = {item.store} storeURL = {redirectURL + item.dealID} price = {item.price}/>
            ))}
        </div>
    )
}

export default Deals

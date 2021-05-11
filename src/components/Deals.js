import React from 'react';
import Deal from './Deal';

function Deals(props) {
    return (
        <div className={`${ props.deals.length > 2 ? "deals" : ""}`} style={{ padding: "0px 20px 20px 20px", marginBottom:"20px", height: props.deals.length > 2 ? "200px" : "auto", overflow: props.deals.length > 2 ? "auto" : "hidden"}}>
            <h3 style={{textAlign:"center"}}>Current Prices</h3>
            <p style={{fontSize:"13px", textAlign:"center", marginBottom:"10px"}}>* US dollar ~ Canadian dollar</p>
            {props.deals.map((item) =>(
                <Deal key = {item.dealID} storeName = {item.store} storeURL = {item.storeURL} price = {item.price}/>
            ))}
        </div>
    )
}

export default Deals

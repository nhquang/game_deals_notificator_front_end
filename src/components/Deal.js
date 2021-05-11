import React from 'react'

function Deal({storeName, storeURL, price}) {
    const rate1 = 1.3334;
    const rate2 = 1.1403;
    const rate3 = 1.1154;
    let cprice = 0;
    if(price > 18.5) cprice = price * rate1;
    else if (price > 9) cprice = price * rate2;
    else cprice = price * rate3;
    return (
        <div className="deal">
            <h3><a href={storeURL} style={{textDecoration:"none"}} target="_blank" rel="noreferrer">{storeName}</a></h3>
            Price: ${price} ~ C${Math.round((cprice + Number.EPSILON) * 100) / 100}
        </div>
    )
}

export default Deal

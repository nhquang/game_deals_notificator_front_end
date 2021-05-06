import React from 'react'

function Deal({storeName, storeURL, price}) {
    return (
        <div className="deal">
            <h3><a href={storeURL} style={{textDecoration:"none"}} target="_blank" rel="noreferrer">{storeName}</a></h3>
            Price: ${price}
        </div>
    )
}

export default Deal

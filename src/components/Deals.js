import React from 'react';
import Deal from './Deal';

function Deals(props) {
    return (
        <>
            {this.props.deals.map((item) =>(
                <Deal />
            ))}
        </>
    )
}

export default Deals

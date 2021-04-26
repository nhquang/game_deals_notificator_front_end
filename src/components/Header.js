import React from 'react'

function Header({title}) {
    return (
        <header className="header" >
            <h1>{title}</h1>
            <h4 style={{fontStyle: 'italic'}}>Search for a game and set a price alert</h4>
        </header>
    )
}

export default Header

import React from 'react'

function Header({title, subtitle}) {
    return (
        <header className="header" >
            <h1>{title}</h1>
            <h4 style={{fontStyle: 'italic'}}>{subtitle}</h4>
        </header>
    )
}

export default Header

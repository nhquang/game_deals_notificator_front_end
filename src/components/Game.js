import React from 'react'

function Game({key, name, image}) {
    return (
        <div className="task">
            <h3>{name}</h3>
            <img src={image} alt={name} width={50} height={30}/>
        </div>
    )
}

export default Game

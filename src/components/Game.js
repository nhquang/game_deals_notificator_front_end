import React from 'react'

function Game({name, image, handleShow, gameID}) {
    const gameClicked = () =>{
        handleShow(name, gameID);
    }

    return (
        <div className="game" onClick={gameClicked}>
            <h3>{name}</h3>
            <img src={image} alt={name} width={50} height={30}/>
        </div>
    )
}

export default Game

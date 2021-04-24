import React from 'react'
import Game from './Game'

function Games(props) {
    return (
        <>
            {props.games.map((item)=>(
                <Game key = {item.gameID} name = {item.external} image = {item.thumb} />
            ))}
        </>
    )
}

export default Games

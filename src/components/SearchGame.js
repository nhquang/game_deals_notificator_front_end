import React from 'react'

function SearchGame(props) {
    const submitting = (e) => {
        e.preventDefault();
        if(props.text) props.getGames(props.text);
        else alert("Enter a game title!!!");
    };
    return (

        <form className= "add-form" onSubmit={submitting}>
            <div className='form-control'>
                <input type="text" placeholder="Enter game title" value={props.text} onChange={(e) => props.changeGameText(e.target.value)}/>
            </div>
            <input type="submit" value ="Search" className="btn btn-block"/>
        </form>
    )
}

export default SearchGame

import React from 'react'
import {useState} from 'react'

function SearchGame(props) {
    const [text, setText] = useState("");
    const submitting = (e) => {
        e.preventDefault();
        if(text){
            props.getGames(text);
            //setText(prev => "");
        }
        else alert("Enter a game title!!!");
    };
    return (

        <form className= "add-form" onSubmit={submitting}>
            <div className='form-control'>
                <input type="text" placeholder="Enter game title" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <input type="submit" value ="Search" className="btn btn-block"/>
        </form>
    )
}

export default SearchGame

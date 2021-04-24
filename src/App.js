import Header from './components/Header'
import { useState, useEffect } from 'react'
import SearchGame from './components/SearchGame'
import Games from './components/Games'

function App() {
  const [games, setGames] = useState([]);
  
  const retrieveGame = async(gameTitle) =>{
    let rslt = await fetch(`https://localhost:44371/notifications/getgames?title=${gameTitle}`);
    let parsed = await rslt.json();
    if(parsed.status) setGames(prev => parsed.games);
  };
  return (
    <div className="container">
      <Header title = "Game Price Notificator"/>
      <SearchGame getGames = {retrieveGame}/>
      <Games games = {games}/>
    </div>
  );
}

export default App;

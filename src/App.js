import Header from './components/Header'
import { useState, useEffect } from 'react'
import SearchGame from './components/SearchGame'
import Games from './components/Games'
import {Modal, Button} from 'react-bootstrap'
import Error from './components/Error'
import AddPriceAlert from './components/AddPriceAlert'

function App() {
  const [games, setGames] = useState([]);
  const [show, setShow] = useState(false);
  const [gameModal, setGameModal] = useState("");
  const [gameid, setGameId] = useState(0);
  const [error, setError] = useState(false);


  const handleClose = () => setShow(prev => false);
  const handleShow = (gameTitle,gameID) => {
    setShow(prev => prev = true);
    setGameModal(prev => prev = gameTitle);
    setGameId(prev => prev = gameID);
  };
  
  const retrieveGame = async(gameTitle) =>{
    let rslt = await fetch(`https://localhost:44371/notifications/getgames?title=${gameTitle}`);
    let parsed = await rslt.json();
    if(parsed.status) {
      setGames(prev => parsed.games);
      parsed.games.length > 0 ? setError(prev => false) : setError(prev => true);
    }
  };

  const addPriceAlert = async({name, email, currency, price, gameID}) =>{
    //name, email, currency, price
    var formatted = {game_id : gameID, email : email, name : name, price : price, currency : currency};
    let rslt = await fetch("https://localhost:44371/notifications/AddNotification", {method: "POST", headers:{"Content-type" : "application/json"}, body: JSON.stringify(formatted)});
    let parsed = await rslt.json();
    if(parsed.status) alert(parsed.message);
    else alert(parsed.message);
  };

  return (
    <div className="container">
      <Header title = "Game Price Notificator"/>

      <Modal className="modal" show={show}>
        <Modal.Header>
          <Modal.Title style={{textAlign: "center", marginTop:"30px"}}>{"Set price alert for " + gameModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPriceAlert addPriceAlert = {addPriceAlert} gameID = {gameid}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{display: "block",margin: "auto", backgroundColor:"red"}} onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
      <SearchGame getGames = {retrieveGame}/>
      {error && <Error/>}
      <Games games = {games} handleShow = {handleShow}/>
    </div>
  );
}

export default App;

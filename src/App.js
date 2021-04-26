import Header from './components/Header'
import { useState } from 'react'
import SearchGame from './components/SearchGame'
import Games from './components/Games'
import {Modal, Button} from 'react-bootstrap'
import Error from './components/Error'
import AddPriceAlert from './components/AddPriceAlert'
import Footer from './components/Footer'

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
    let rslt = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/getgames?title=${gameTitle}`);
    let parsed = await rslt.json();
    if(parsed.status) {
      setGames(prev => parsed.games);
      parsed.games.length > 0 ? setError(prev => false) : setError(prev => true);
    }
  };

  const addPriceAlert = async({name, email, currency, price, gameID, gameTitle}) =>{
    var formatted = {game_id : gameID, email : email, name : name, price : price, currency : currency, game : gameTitle};
    let rslt = await fetch("https://gamedealsnotificator.azurewebsites.net/notifications/AddNotification", {method: "POST", headers:{"Content-type" : "application/json"}, body: JSON.stringify(formatted)});
    let parsed = await rslt.json();
    alert(parsed.message);
  };

  return (
    <div className="container">
      <Header title = "Game Deals Notificator" subtitle = "Search for a game and set a price alert"/>

      <Modal className="modal" show={show}>
        <Modal.Header>
          <Modal.Title style={{textAlign: "center", marginTop:"20px"}}>{"Set price alert for " + gameModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPriceAlert addPriceAlert = {addPriceAlert} gameID = {gameid} gameTitle = {gameModal}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{display: "block", marginLeft:"auto", marginRight:"auto", marginBottom : "30px", backgroundColor:"red"}} onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
      <SearchGame getGames = {retrieveGame}/>
      {error && <Error/>}
      <Games games = {games} handleShow = {handleShow}/>
      <Footer />
    </div>
  );
}

export default App;

import Header from './components/Header'
import { useState } from 'react'
import SearchGame from './components/SearchGame'
import Games from './components/Games'
import {Modal, Button} from 'react-bootstrap'
import Error from './components/Error'
import AddPriceAlert from './components/AddPriceAlert'
import Footer from './components/Footer'
import Deals from './components/Deals'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ManageAlerts from './components/ManageAlerts'

function App() {
  const [games, setGames] = useState([]);
  const [show, setShow] = useState(false);
  const [gameModal, setGameModal] = useState("");
  const [gameid, setGameId] = useState(0);
  const [error, setError] = useState(false);
  const [deals, setDeals] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [alerterror, setAlertError] = useState("");
  const [emailText, setEmailText] = useState("");
  const [gameText, setGameText] = useState("");

  const handleClose = () => {
    setShow(prev => false);
    setGameModal(prev => prev = "");
    setGameId(prev => prev = 0);
    setDeals(prev => []);
  }

  const handleShow = (gameTitle,gameID) => {
    setShow(prev => prev = true);
    setGameModal(prev => prev = gameTitle);
    setGameId(prev => prev = gameID);
    retrieveDeals(gameID);
  };
  
  const retrieveDeals = async (gameID) =>{
    try{
      let rslt = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/getdeals?id=${gameID}`);
      //let rslt = await fetch(`https://localhost:44371/notifications/getdeals?id=${gameID}`);
      let parsed = await rslt.json();
      if(parsed.status){
        setDeals(prev => prev = parsed.deals);
      }
    }
    catch(err){
      console.log(err.message);
    }
  }

  const retrieveGames = async(gameTitle) =>{
    try{
      let rslt = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/getgames?title=${gameTitle}`);
      //let rslt = await fetch(`https://localhost:44371/notifications/getgames?title=${gameTitle}`);
      let parsed = await rslt.json();
      if(parsed.status) {
        setGames(prev => parsed.games);
        parsed.games.length > 0 ? setError(prev => false) : setError(prev => true);
      }
    }
    catch(err){
      console.log(err.message);
    }
  };

  const addPriceAlert = async({name, email, currency, price, gameID, gameTitle}) =>{
    try{
      var formatted = {game_id : gameID, email : email, name : name, price : price, currency : currency, game : gameTitle};
      let rslt = await fetch("https://gamedealsnotificator.azurewebsites.net/notifications/AddNotification", {method: "POST", headers:{"Content-type" : "application/json"}, body: JSON.stringify(formatted)});
      //let rslt = await fetch("https://localhost:44371/notifications/AddNotification", {method: "POST", headers:{"Content-type" : "application/json"}, body: JSON.stringify(formatted)});
      let parsed = await rslt.json();
      alert(parsed.message);
    }
    catch(err){
      console.log(err.message);
    }
  };
  const retrieveAlerts = async (email)=>{
    try{
        //const data = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/getnotifications?email=${email}`);
        const data = await fetch(`https://localhost:44371/notifications/getnotifications?email=${email}`);
        const parsed = await data.json();
        if(parsed.status){
            setAlerts(prev => parsed.notifications);
            parsed.notifications.length > 0 ? setAlertError(prev => false) : setAlertError(prev => true);
        }
        else throw parsed;
    }
    catch(err){
        console.log(err.message);
    }
};
  const deleteAlert = async (game_id, price, email, name, currency, game) => {
    try{
        const formatted = {game_id: game_id, email : email, price : price, name : name, currency : currency, game: game};
        //const data = await fetch(`https://gamedealsnotificator.azurewebsites.net/notifications/deletenotification`, {method: "DELETE", headers:{"Content-type" : "application/json"}, body : JSON.stringify(formatted)});
        const data = await fetch(`https://localhost:44371/notifications/DeleteNotification`, {method: "DELETE", headers:{"Content-type" : "application/json"}, body : JSON.stringify(formatted)});
        const parsed = await data.json();
        if(parsed.status)
            setAlerts(alerts.filter((item) => item.game_id != game_id && item.price != price));
        else throw parsed;
    }
    catch(err){
        console.log(err.message);
    }

  };
  const changeEmailText = (email)=>{
    setEmailText(prev => email);
  }
  const changeGameText = (game)=>{
    setGameText(prev => game)
  }
  return (
    <Router>
    <div className="container">
      
      <Route path="/" exact render={(props)=>(
      <>
      <Header title = "Game Deals Notificator" subtitle = "Search for a game and set a price alert"/>
      <Modal className="modal" show={show}>
        <Modal.Header>
          <Modal.Title style={{textAlign: "center", marginTop:"20px"}}>{"Set price alert for " + gameModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPriceAlert addPriceAlert = {addPriceAlert} gameID = {gameid} gameTitle = {gameModal}/>
          <Deals deals = {deals}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{display: "block", marginLeft:"auto", marginRight:"auto", marginBottom : "30px", backgroundColor:"red"}} onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
      <SearchGame getGames = {retrieveGames} text = {gameText} changeGameText ={changeGameText}/>
      {error && <Error/>}
      <Games games = {games} handleShow = {handleShow}/>
      </>
      )}/>
      <Route path="/managealert" render ={() => <ManageAlerts deleteAlert = {deleteAlert} retrieveAlerts = {retrieveAlerts} alerts ={alerts} error = {alerterror} emailText = {emailText} changeEmailText ={changeEmailText}/>}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
// import "../imageSelector.js"
import Header from "./header.js"
import Homepage from "./homepage"
import Lobby from "./lobby.js"
import Button from '@material-ui/core/Button';
import Drawspace from "./drawspace"
import Status from "./status.js"
import Vote from "./vote.js"
import Winner from "./winner.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <div className="App">
                  <div className="App-header">
                    <Header />
                  </div>
                  <br></br>
                  <div class="left"></div>
                  <h3>Challenge your friends to an epic battle of art.</h3>
                  <p className="App-intro">
                    Each user is presented with the same random image that they all must
                    draw. Once completed all the images will go head-to-head with one
                    champion emerging.
                  </p>
                  <img id="mainImage" src="https://picsum.photos/300/300" alt="Random" />
                  <Button size="large" variant="outlined" color="secondary" href="/Arena/Lobby">
                    go to arena
                  </Button>
                  <h5>Developers</h5>
                  <ul>
                    <li>Terrence Kuiper</li>
                    <li>Justin Stewart</li>
                  </ul>
                  <div>
                    <br></br>
                    This project is <b>5</b> days old! Be sure to come back tomorrow.
                  </div>
                </div>
              </Route>
              <Route path="/Homepage">
                <Homepage></Homepage>
              </Route>
              <Route path="/Arena/Lobby">
                <Lobby></Lobby>
              </Route>
              <Route path="/Arena/Drawspace">
                <Drawspace></Drawspace>
              </Route>
              <Route path="/Arena/Status">
                <Status></Status>
              </Route>
              <Route path="/Arena/Vote">
                <Vote></Vote>
              </Route>
              <Route path="/Arena/Winner">
                <Winner></Winner>
              </Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

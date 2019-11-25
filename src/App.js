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
import Arena from "./arena.js"
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul> */}
            {/* <hr /> */}
            <Switch>
              <Route exact path="/">
                <div className="App">
                  <div className="App-header">
                    <Header />
                    {/* <img src="https://picsum.photos/100" alt="Random" /> */}
                  </div>
                  <br></br>
                  {/* <div class="left"></div> */}
                  <h3>Challenge your friends to an epic battle of art.</h3>
                  <p className="App-intro">
                    Each user is presented with the same random image that they all must
                    draw. Once completed all the images will go head-to-head with one
                    champion emerging.
                  </p>
                  <img id="mainImage" src="https://picsum.photos/300/300" alt="Random" />
                  <Button size="large" variant="outlined" color="secondary" href="/Arena">
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
              <Route path="/Arena">
                <Arena></Arena>
              </Route>
              <Route path="/dashboard">
                {/* <Dashboard /> */}
              </Route>
            </Switch>
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default App;

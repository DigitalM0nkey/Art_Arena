import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
// import "../imageSelector.js"
import Header from "./header.js";
import Homepage from "./homepage";
import Arena from "./arena.js";
import Button from "@material-ui/core/Button";

import firebase, { auth, provider, config } from "./firebase";

console.log("FIREBASE =>", firebase);
console.log(process.env);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.login = () => {
      auth.signInWithPopup(provider);
    };
    this.logout = () => {
      auth.signOut();
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  render() {
    let authButton = this.state.user ? (
      <>
        <img
          id="userImage"
          src={this.state.user.photoURL}
          height="75"
          width="75"
          radius="100"
          alt="User Image"
          onClick={this.logout}
        />
        <h5>{this.state.user.displayName}</h5>
      </>
    ) : (
      <img
        onClick={this.login}
        src={require("./btn_google_signin_dark_pressed_web.png")}
      />
    );
    let userInfo = this.state.user ? (
      <>
        <h5>Signed in using {this.state.user.displayName}</h5>{" "}
      </>
    ) : null;
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
                  <Header info={userInfo} authButton={authButton} />
                  {/* <img src="https://picsum.photos/100" alt="Random" /> */}
                </div>
                <br></br>
                <div class="left"></div>
                <h3>Challenge your friends to an epic battle of art.</h3>
                <p className="App-intro">
                  Each user is presented with the same random image that they
                  all must draw. Once completed all the images will go
                  head-to-head with one champion emerging.
                </p>
                <img
                  id="mainImage"
                  src="https://picsum.photos/300/300"
                  alt="Random"
                />
                <br></br>
                <Button
                  size="large"
                  variant="outlined"
                  color="secondary"
                  href="/Arena"
                >
                  go to arena
                </Button>
                <h5>Developers</h5>
                <ul>
                  <li>Terrence Kuiper</li>
                  <li>Justin Stewart</li>
                </ul>
                <div>
                  <div></div>
                  <br></br>
                  This project is <b>6</b> days old! Be sure to come back
                  tomorrow.
                </div>
              </div>
            </Route>
            <Route path="/Homepage">
              <Homepage></Homepage>
            </Route>
            <Route path="/Arena">
              <Arena></Arena>
            </Route>
            <Route path="/dashboard">{/* <Dashboard /> */}</Route>
          </Switch>
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default App;

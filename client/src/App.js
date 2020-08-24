import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Images/Background.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TeacherPortal from "./Pages/TeacherPortal";
import ParentPortal from "./Pages/ParentPortal";
import Activities from "./Pages/Activities";
import Switch from "react-bootstrap/esm/Switch";
import axios from "axios";
import Login from "./Login/Login.js";

function App() {

  const [userState, setUserState] = useState(
    {
      loggedIn: false,
      user: null
    }
  );
  useEffect(() => {
    axios.get(`/users/user_data`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        res.data&&setUserState({ loggedIn: true, user: res.data })
      }).catch(error => {
        console.log(error)
        setUserState({
          loggedIn: false, user: null
        })

      })}, [])


    return (
      <div>
        <BrowserRouter>
          <Navbar setUserState={setUserState} />
          <Route exact path="/" component={Home} />
          {userState.loggedIn &&
            <Switch>
              <Route exact path="/teacherPortal" component={TeacherPortal} />
              <Route exact path="/parentPortal" component={ParentPortal} />
              <Route exact path="/activities" component={Activities} />
            </Switch>}

          {!userState.loggedIn && <Switch>
            <Route exact path="/teacherPortal" component={Login} />
            <Route exact path="/parentPortal" component={Login} />
            <Route exact path="/activities" component={Login} />
            <Route exact path="/login" component={Login} />
          </Switch>}
        </BrowserRouter>
      </div>
    )
  }


/* export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render = {props  (
            <Home 
          )} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
} */

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Images/Background.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TeacherPortal from "./Pages/TeacherPortal";
import ParentPortal from "./Pages/ParentPortal";
import Activities from "./Pages/Activities";
import Axios from "axios";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/-t" component={TeacherPortal} />
        <Route exact path="/-p" component={ParentPortal} />
        <Route exact path="/-a" component={Activities} />
      </BrowserRouter>
    </div>
  );
}

export default App;

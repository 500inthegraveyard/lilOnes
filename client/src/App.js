import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import ModalExample from "./components/Modal/Test";

import "./components/Images/Background.css";
import Tabs from "./components/Tabs/Tabs";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TeacherPortal from "./Pages/TeacherPortal";
import ParentPortal from "./Pages/ParentPortal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/-t" component={TeacherPortal} />
        <Route exact path="/-p" component={ParentPortal} />
      </BrowserRouter>
    </div>
  );
}

export default App;

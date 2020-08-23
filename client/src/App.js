import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Images/Background.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeacherPortal from "./pages/TeacherPortal";
import ParentPortal from "./pages/ParentPortal";
import Activities from "./pages/Activities";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/teacherPortal" component={TeacherPortal} />
        <Route exact path="/parentPortal" component={ParentPortal} />
        <Route exact path="/activities" component={Activities} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Components/02_Page_1_Com/FirstPage";
import Header from "./Components/1_Header_Com/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Homepage/Homepage";

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}
export default App;

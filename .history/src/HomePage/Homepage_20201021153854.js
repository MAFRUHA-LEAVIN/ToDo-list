import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Components/1_Header_Com/Header";
import FirstPage from "../Components/02_Page_1_Com/FirstPage";
import "../App";

class Home extends React.Component {
  render() {
    return (
      <div className="Home_Page">
        <Header />
        <Switch>
          <Route exact path="/" component={FirstPage} />
        </Switch>
      </div>
    );
  }
}

export default Home;

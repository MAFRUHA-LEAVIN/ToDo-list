import React from "react";
import "../App";
import FirstPage from "../Components/todoApp/01_FirstPage";
import { Switch, Route } from "react-router-dom";
import Headers from "../Components/1_Header_Com/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Switch>
          <Route path="/" component={FirstPage} exact />
        </Switch>
      </div>
    );
  }
}
export default Home;

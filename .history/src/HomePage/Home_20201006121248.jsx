import React from "react";
import "../App";
import FirstPage from "../Components/02_PageOne/FirstPage.component";
import { Switch, Route } from "react-router-dom";
import Headers from "../Components/01_Header/Header.component";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Switch>
          <Route path="/firstpage" component={FirstPage} exact />
        </Switch>
      </div>
    );
  }
}
export default Home;

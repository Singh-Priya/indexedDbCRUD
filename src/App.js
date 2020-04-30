import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LocationList from "./containers/locationList";
import AddLocation from "./containers/addLocation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="main_wrapper">
        <div className="content_wrapper">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={LocationList} />
              <Route exact path="/addlocation" component={AddLocation} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

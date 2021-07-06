import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header';
import Main from './Componants/Main';
import Favorite from './Componants/Favorite';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"></Route>
            <Main/>
          </Switch>
          <Route exact path="/favorite"></Route>
          <Favorite />
        </Router>
      </>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
// import axios from "axios";
import Products from "./components/Products";
import {Route,Switch} from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar"
import Details from "./components/Details";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart}/>
          <Route path="/details" component={Details}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;

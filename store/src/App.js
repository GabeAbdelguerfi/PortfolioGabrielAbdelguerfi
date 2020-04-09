import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

class App extends Component {
  render(){
    return(
    <React.Fragment>
      <NavBar/>
        <Switch>
        <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/Cart" component={Cart}/>
          <Route component={Default}/>
       </Switch>
    </React.Fragment>
    );
  }
}

export default App;

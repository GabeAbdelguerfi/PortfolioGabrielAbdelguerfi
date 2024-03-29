import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ProductsList from "./components/product-list.component";
import EditProducts from "./components/edit-product.component";
// import CreateProducts from "./components/create-product.component";
import userLogin from "./components/create-user.component";
import DetailProductPage from './views/DetailProductPage';
import signIn from "./components/sign-in.component.js";

function App() {
  return (
     <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ProductsList} />
      <Route path="/edit/:id" component={EditProducts} />
      <Route path="/register" component={userLogin} />
      <Route path='/sign-in' component={signIn} />
      <Route exact path="/products/:productId" component={(DetailProductPage)} />
      </div>
    </Router>
  );
}

export default App;

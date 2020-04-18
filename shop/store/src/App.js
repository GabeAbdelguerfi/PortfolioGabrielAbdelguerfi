import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ProductsList from "./components/product-list.component";
import EditProducts from "./components/edit-product.component";
import CreateProducts from "./components/create-product.component";
import CreateStore from "./components/create-store.component";

function App() {
  return (
     <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ProductsList} />
      <Route path="/edit/:id" component={EditProducts} />
      <Route path="/favorites" component={CreateProducts} />
      <Route path="/cart" component={CreateStore} />
      </div>
    </Router>
  );
}

export default App;

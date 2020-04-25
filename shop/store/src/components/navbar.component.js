import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
export default class Navbar extends Component {

  state = {
    itemname: '',
    price: '',
    imageUrl: '',
    products: []

}
componentDidMount = () =>{
    this.getProductList();
};

getProductList = () => {
    Axios.get('http://localhost:5000/products')
    .then((response) => {
        const data = response.data;
        this.setState({products: data});
        console.log("Data has been received!");
    })
    .catch(() => {
        alert('Error retrieving data!')
    });
}

displayProducts = (products) => {

    if(!products.length) return null;

    return products.map((product, index) => (
        <div key={index}>
            <h3>{product.itemname}</h3>
            <p>{product.price}</p>
        </div>
));
};

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Shopping Application</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/favorites" className="nav-link">My favorites</Link>
          </li>
          <li className="navbar-item">
          <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
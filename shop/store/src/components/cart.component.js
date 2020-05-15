import React, { Component } from 'react'
import Axios from 'axios';
import '../App.css';
import SearchFeature from './SearchFeature';

var price;

export default class Cart extends Component {

    state = {
        itemname: '',
        price: '',
        imageUrl: '',
        products: [],
        userProducts: [],
        cart: []
    }

    componentDidMount = () =>{
        this.getUserCart();
        // this.getProductList();
    };

    getUserCart = () => {
        Axios.post('http://localhost:5000/users/get-cart', {username: this.props.match.params.user})
            .then ( ( res ) => {
                const data = res.data;
                this.setState({products: data})
            })
    }

    // checkOut = () => {

    // }

    removeProducts = () => {
        console.log('called remove product')
        Axios.post('http://localhost:5000/users/remove-from-cart', {username: this.props.match.params.user})
            .then( ( res ) => {
                console.log(res)
            })
    }

    updatePrice = () => {
        Axios.post('http://localhost:5000/users/checkout', {username: this.props.match.params.user, price: this.price})
            .then( ( res ) => {
                console.log(res)
            })
    }

    displayProducts = (products) => {

        if(!products.length) return null;

        if (products[0]._id != null ) {
        return products.map((product, index) => (
            <div className="shop-item container col col-6 md-col-12" key={index}>
                <div className='container inner-element'>
                    <h3 className="shop-item">{product.itemname}</h3>
                    <img className="item-image" src={product.imageUrl} width="130px" height="130px" alt="..."></img>
                    <p className="item-price">Price: ${product.price}</p>
                    <a href={`/detail/${this.props.match.params.user}/${product._id}`}>More Information</a>
                </div>
            </div>
        
    ))}
    }

    render() {
        return (
            <div>
                <div className='row'>
                    {this.displayProducts(this.state.products)}
                </div>
                <button className='btn add-cart-button' onClick={ () => {
                    console.log(this.state.products)    
                    let i = 0;
                    let products = this.state.products;
                    let currentPrice = 0;
                    while ( i < products.length ) {
                        currentPrice += parseInt(products[i].price);
                        i++;
                    }
                    this.price = currentPrice;
                    console.log(this.price)
                    this.removeProducts();
                    this.updatePrice();
                } }>CHECKOUT</button>
            </div>
        )
    }
}

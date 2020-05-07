import React, { Component, useState } from 'react'
import Axios from 'axios';
import '../App.css';
import SearchFeature from './SearchFeature';

export default class ProductList extends Component {
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
            <div className="shop-item container col col-6 md-col-12" key={index}>
                <div class='container inner-element'>
                    <h3 className="shop-item">{product.itemname}</h3>
                    <img className="item-image" src={product.imageUrl} width="130px" height="130px" alt="..."></img>
                    <p className="item-price">Price: ${product.price}</p>
                    <a href={`/products/${product._id}`}>More Information</a>
                    
                    <button className="btn add-cart-button"  /*onclick={addToCart}*/ type="button">ADD TO CART</button>
                </div>
            </div>
    ));
    }
    searchFeature = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                <SearchFeature
                    // refreshFunction={updateSearchTerms}
                />

            </div>
    )
    }

    updateSearchTerms = () =>{

    }

    render() {
        console.log('State', this.state)
        return (
            <div>
                {this.searchFeature()}
                <div class='row'>
                    {this.displayProducts(this.state.products)}
                </div>
            </div>
        )
    }
}

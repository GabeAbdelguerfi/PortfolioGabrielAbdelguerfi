import React, { Component } from 'react'
import Axios from 'axios';
import '../App.css';

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
            <div class="shop-item container" key={index}>
                <h3 class="shop-item pl-5">{product.itemname}</h3>
                <img class="item-image" src={product.imageUrl} width="130px" height="130px" alt="..."></img>
                <p class="item-price pl-5">${product.price}</p>
                <button class="btn btn-primary"  /*onclick={addToCart}*/ type="button">ADD TO CART</button>
            </div>
    ));

    
    };
    render() {
        console.log('State', this.state)
        return (
            <div>
                {this.displayProducts(this.state.products)}
            </div>
        )
    }
}

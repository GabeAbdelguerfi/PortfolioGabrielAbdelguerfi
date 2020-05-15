import React, { Component } from 'react'
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
        })
        .catch(() => {
            alert('Error retrieving data!')
        });
    }

    displayProducts = (products) => {

        if(!products.length) return null;

        return products.map((product, index) => (
            <div className="shop-item container col col-6 md-col-12" key={index}>
                <div className='container inner-element'>
                    <h3 className="shop-item">{product.itemname}</h3>
                    <img className="item-image" src={product.imageUrl} width="130px" height="130px" alt="..."></img>
                    <p className="item-price">Price: ${product.price}</p>
                    <a href={`/detail/${this.props.match.params.user}/${product._id}`}>More Information</a>
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
    )}

    updateSearchTerms = () =>{

    }

    render() {
        return (
            <div>
                {this.searchFeature()}
                <div className='row'>
                    {this.displayProducts(this.state.products)}
                </div>
            </div>
        )
    }
}

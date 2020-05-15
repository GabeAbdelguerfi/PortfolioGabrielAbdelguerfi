import React, { Component, useEffect } from 'react'
import Axios from 'axios';
import { Input } from 'antd';
import '../App.css';
const { Search } = Input;

export default class ProductList extends Component {

    state = {
        itemname: '',
        price: '',
        imageUrl: '',
        products: [],
        searchTerm: '',
        matchingSearch: false,
        productSearch: []

    }

    componentDidMount = () =>{
        this.getProductList();
        this.displayProducts(this.state.products);
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

    onChangeSearch = (event) => {
        this.setState({searchTerm: event.currentTarget.value})
       // console.log(this.state.searchTerm)
        let i = 0;
        let products = this.state.products;
        // console.log(products);
        while(i < products.length){
            if(products[i].itemname === event.currentTarget.value){
            this.setState({productSearch: products[i]})
            this.setState({matchingSearch: true})
            }
        i++;
        }
    }

    displayProducts = (products) => {
        //console.log(this.state.searchTerm)
        console.log(this.state.productSearch)
        let searchResult = this.state.productSearch;
        if(this.state.searchTerm == ''){
            
        return products.map((product, index) => (

            <div className="shop-item container col col-6 md-col-12" key={index}>
                {console.log(index)}
                <div className='container inner-element'>
                    <h3 className="shop-item">{product.itemname}</h3>
                    <img className="item-image" src={product.imageUrl} width="130px" height="130px" alt="..."></img>
                    <p className="item-price">Price: ${product.price}</p>
                    <a href={`/detail/${this.props.match.params.user}/${product._id}`}>More Information</a>
                    <button className="btn add-cart-button" onClick={() => {
                        console.log('clicked')
                        this.setState(state => ({
                            product: [product.cart, product]
                        }))
                        console.log(this.state)
                        Axios.post('http://localhost:5000/users/add-to-cart', {
                                user: this.props.match.params.user,
                                p_id: product._id 
                            }).then ((res) => {
                                console.log('testing')
                                console.log(product._id)
                            }).catch((res) => {
                                console.log(res)
                            })
                    }} type="button">ADD TO CART</button>
                </div>
            </div>
            ));
         }
         else if(this.state.searchTerm != '' && this.state.matchingSearch == true){
            // return <div>hi</div>
            return (
                <div className="shop-item container col col-6 md-col-12">
                    <div className='container inner-element'>
                        <h3 className="shop-item">{searchResult.itemname}</h3>
                        <img className="item-image" src={searchResult.imageUrl} width="130px" height="130px" alt="..."></img>
                        <p className="item-price">Price: ${searchResult.price}</p>
                        <a href={`/detail/${this.props.match.params.user}/${searchResult._id}`}>More Information</a>
                        <button className="btn add-cart-button" onClick={() => {
                            console.log('clicked')
                            console.log(this.state)
                            Axios.post('http://localhost:5000/users/add-to-cart', {
                                    user: this.props.match.params.user,
                                    p_id: searchResult._id 
                                }).then ((res) => {
                                    console.log('testing')
                                    console.log(searchResult._id)
                                }).catch((res) => {
                                    console.log(res)
                                })
                        }} type="button">ADD TO CART</button>
                    </div>
                </div>
                );
          }
    }


    render() {
        // console.log(this.searchTerm.)
        return (
                <div>
                    <div>
                    <Search
                        value={this.searchTerms}
                        onChange={this.onChangeSearch}
                        onClick={this.onChangeSearch}
                        placeholder="Search by typing..."
                        />
                    </div>
                        <div className='row'>
                            {this.displayProducts(this.state.products)}
                        </div>
            </div>
        )
    }
}

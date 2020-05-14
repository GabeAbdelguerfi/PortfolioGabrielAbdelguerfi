import React, { Component, useState } from 'react'
import Axios from 'axios';
import '../App.css';

export default class Cart extends Component {

    componentDidMount = () => {
        this.getProductlist();
    }

    getProductlist = () => {
        Axios.post('http://localhost:5000/getCart', this.props.match.params.user)
            .then ( (res) => {
                const data = res.data;
                console.log(data)
        })
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
            </div>
        )
    }
}
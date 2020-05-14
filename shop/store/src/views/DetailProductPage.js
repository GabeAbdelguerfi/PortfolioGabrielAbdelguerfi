import React, { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

function DetailProductPage(props) {
    // const dispatch = useDispatch();
    const productId = props.match.params.productId

    const [Product, setProduct] = useState([])
    useEffect(() => {
        Axios.get(`http://localhost:5000/products/${productId}`)
            .then(response => {
               setProduct(response.data)
               console.log(response.data)
            })
    }, [])

    try {
    return (
        <div className='details-container'>
            <div className='detail-img-container float-lg-left'>
                <img className="item-image detail-image" src={Product.imageUrl} alt="..."></img>
            </div>
            <div className='container'>
                <h1 className="detail-name block">{Product.itemname}</h1>
                <p className="detail-price block">Price: ${Product.price}</p>
                <div className='block'>
                    <h2 className="detail-desc-title">Description</h2>
                    <p className="detail-desc inline">{Product.description}</p>    
                </div>
                <button className="btn add-cart-button" onClick={() => {
                        try {
                            Axios.post('http://localhost:5000/users/add-to-cart', {
                                    user: this.props.match.params.user,
                                    p_id: Product._id 
                                }).then ((res) => {
                                    console.log('testing')
                                }).catch((res) => {
                                    this.props.history.push(`/sign-in`)
                                })
                        } catch (err) {
                            console.log(err)
                        }
                    }} type="button">ADD TO CART</button>     
                    <button className="btn add-cart-button" onClick={() => {
                        try {
                            this.props.history.push(`/cart/${this.props.match.params.user}`)
                        } catch (err) {
                            console.log(err)
                        }
                    }} type="button">GO TO CART</button>           
            </div>
        </div>
    )
    } catch ( err ) {
        return (
            <div className='details-container'>
                <div className='detail-img-container float-lg-left'>
                    <img className="item-image detail-image" src={Product.imageUrl} alt="..."></img>
                </div>
                <div className='container'>
                    <h1 className="detail-name block">{Product.itemname}</h1>
                    <p className="detail-price block">Price: ${Product.price}</p>
                    <div className='block'>
                        <h2 className="detail-desc-title">Description</h2>
                        <p className="detail-desc inline">{Product.description}</p>    
                    </div>
                    <button className="btn add-cart-button" onClick={() => {
                            try {
                                Axios.post('http://localhost:5000/users/add-to-cart', {
                                        user: this.props.match.params.user,
                                        p_id: Product._id 
                                    }).then ((res) => {
                                        console.log('testing')
                                    }).catch((res) => {
                                        this.props.history.push(`/sign-in`)
                                    })
                            } catch (err) {
                                console.log(err)
                            }
                        }} type="button">ADD TO CART</button>     
                        /* <button className="btn" onClick={() => {
                            try {
                                this.props.history.push(`/cart/${this.props.match.params.user}`)
                            } catch (err) {
                                console.log(err)
                            }
                        }} type="button"></button>            */}
                </div>
            </div>
        )
    }

}

export default DetailProductPage
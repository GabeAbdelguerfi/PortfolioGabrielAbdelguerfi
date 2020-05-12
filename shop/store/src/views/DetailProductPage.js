import React, { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux';
import Axios from 'axios'

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
            </div>
        </div>
    )

}

export default DetailProductPage
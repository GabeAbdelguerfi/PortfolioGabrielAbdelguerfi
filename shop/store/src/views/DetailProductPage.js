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
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="align-baseline text-center">
                <h1 classname="">{Product.itemname}</h1>
                <img className="item-image" src={Product.imageUrl} width="130px" height="130px" alt="..."></img>
                <p className="">${Product.price}</p>
                <h1 className="pr-5">Description</h1>
                <p className="">{Product.description}</p>
            </div>
            </div>
    )

}

export default DetailProductPage
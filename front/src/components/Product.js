import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom'

export default function Product(props) {
    const { product } =  props;
    return (
        <div className="col-4">
            <div key={product._id} className="card" style={{width: '18rem'}}>
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name}/>
                </Link>
                <div className="card-body">
                    <Link to={`/product/${product._id}`}>
                        <Rating id="product-rating" rating={product.rating} numReviews={product.numReviews}></Rating>
                    </Link>
                
                    <Link to={`/product/${product._id}`}>
                        <p className="card-text">{product.name}</p>
                        <h5 className="card-price">${product.price}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}
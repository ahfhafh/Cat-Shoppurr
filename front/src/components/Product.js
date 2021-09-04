import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const { product } =  props;
    return (
        <div className="col-4">
            <div key={product._id} className="card" style={{width: '18rem'}}>
                <a href={`/product/${product._id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name}/>
                </a>
                <div className="card-body">
                    <a href={`/product/${product._id}`}>
                        <Rating id="product-rating" rating={product.rating} numReviews={product.numReviews}></Rating>
                    </a>
                
                    <a href={`/product/${product._id}`}>
                        <p className="card-text">{product.name}</p>
                        <h5 className="card-price">${product.price}</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import data from '../data';

export default function Product(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div> Product Not Found!</div>
    }

    return (
        <div>
            <div className="row">
                <h1>{product.name}</h1>
                <img className="large" src={product.image} alt={product.name}></img>
                
            </div>
        </div>
    )
}
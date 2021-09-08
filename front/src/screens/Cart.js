import React from 'react';

export default function Cart(props) {
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    return (
        <div className="container">
            <h1>Cart</h1>
            <p>Add to cart : ProductID: {productID} Qty: {qty}</p>
        </div> 
    )
}
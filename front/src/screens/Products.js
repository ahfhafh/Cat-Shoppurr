import React, { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { detailsProduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function Product(props) {
    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector( state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productID));
    }, [dispatch, productID]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productID}?qty=${qty}`);
    }

    return (
        <Fragment>
            {loading ? (<Loading></Loading>)
            : error ? (<Message>{error}</Message>) : (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 id="product_name">{product.name}</h1>
                            <img className="large" id="product_img" src={product.image} alt={product.name}></img>
                        </div>
                        <div className="col pt-5 px-6">
                            {(product.stock > 0  ? (
                            <>
                                <p>Qty:</p>
                                <div>
                                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.stock).keys()].map((x) => (<option key={x + 1} value={x + 1}> {x + 1} </option>))}
                                    </select>
                                </div>
                                <button onClick={addToCartHandler}>Add to cart</button>
                            </>) : (<p>Out of Stock</p>))}
                            <h3 id="product_price">{product.price}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

export default function Cart(props) {
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty))
        }
    }, [dispatch, productID, qty]);

    const removeFromCartHandler = (ID) => {
        dispatch(removeFromCart(ID));
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    return (
        <div className="container">
            <h1>Items in Cart</h1>
            <div className="row">
                <div className="col-10">
                    {cartItems.length === 0 ? <Message>
                        Cart is empty. <Link to="/"> Find stuff</Link>
                    </Message> : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key = {item.productID}>
                                    <div className="row">
                                        <div className="col">
                                            <img src = {item.image} alt = {item.name} className = "cart-img"></img>
                                        </div>
                                        <div className="col">
                                            <Link to = {`/product/${item.productID}`}>{item.name}</Link>
                                        </div>
                                        <div className="col">
                                            <select value = {item.qty} onChange = {(e) => dispatch(addToCart(item.productID, Number(e.target.value)))}>
                                                {[...Array(item.stock).keys()].map((x) => (<option key={x + 1} value={x + 1}> {x + 1} </option>))}
                                            </select>
                                        </div>
                                        <div className="col">
                                            ${item.price}
                                        </div>
                                        <div className="col">
                                            <button type="button" onClick={() => removeFromCartHandler(item.productID)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-2">
                    <h3>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}</h3>
                    <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                        CheckOut
                    </button>
                </div>
            </div>
        </div> 
    )
}
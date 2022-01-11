import React, { Fragment, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Product from '../components/Product';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'

export default function Home() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <Fragment>
            {loading ? (<Loading></Loading>)
            : error ? (<Message>{error}</Message>) : (
                <Fragment>
                    <Carousel id="Main-Carousel">
                        <Carousel.Item className="Carousel-Item">
                        <img src={"./images/main-cat-toys-1.jpg"} className="d-block" alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="Carousel-Item">
                        <img src={"./images/main-cat-toys-2.jpg"} className="d-block" alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="Carousel-Item">
                        <img src={"./images/main-cat-toys-3.jpg"} className="d-block" alt="Third slide"/>
                        </Carousel.Item>
                    </Carousel>
    
                    <div className="small-container" id="featured-products-1">
                        <h2>Featured Products</h2>
                        <div className="row">
                        {products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                        </div>
                    </div>
                </Fragment>
            )};
        </Fragment>
    )
}
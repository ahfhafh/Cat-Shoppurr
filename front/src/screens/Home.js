import React, { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Product from '../components/Product';
import data from '../data';

export default function Home() {
    return (
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
                {data.products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
                </div>
            </div>
        </Fragment>
    )
}
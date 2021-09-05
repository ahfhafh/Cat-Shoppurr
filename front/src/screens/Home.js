import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Product from '../components/Product';
import axios from 'axios';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
            
        }
        fetchData();
    }, []);

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
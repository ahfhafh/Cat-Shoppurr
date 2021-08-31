import React from 'react';
import data from './data';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Carousel from 'react-bootstrap/Carousel'
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';

function App() {
  return (
    <fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark flex-column align-items-stretch">
        <div className="d-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent1">
          <form className="d-flex align-self-baseline pt-4">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <a href="/" className="navbar-brand pe-0"><img src={"./images/cat_logo_light.png"} alt="Logo" width="150" height="150"/>Shoppurr</a>
          
          <ul className="nav-item navbar-nav py-3">
            <a className="nav-link" href="/login">Login</a>
            <a className="nav-link" href="/signup">Signup</a>
            <a className="nav-link" href="/cart">Cart</a>
          </ul>

          <DropdownButton variant="dark" id="dropdown-currency" title="$ CAD" menuVariant="dark">
            <Dropdown.Item href="/CAD">$ CAD</Dropdown.Item>
            <Dropdown.Item href="/USD">$ USD</Dropdown.Item>
            <Dropdown.Item href="/AUD">$ AUD</Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark" id="navlinksbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent1" aria-controls="navbarContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarContent1">
            <ul className="navbar-nav mx-auto py-2" id="nav-links">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                <a className="nav-link" href="/#">About</a>
                <a className="nav-link" href="/#">Shop</a>
                <a className="nav-link" href="/#">Contact</a>
            </ul>
          </div>
        </div>
      </nav>

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
          <div className="col-4">
            <div key={product._id} className="card" style={{width: '18rem'}}>
              <a href={`/product/${product._id}`}>
              <img src={product.image} className="card-img-top" alt={product.name}/>
              </a>
              <div className="card-body">
                <div className="rating">
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarHalf/>
                  <Star/>
                </div>
                <a href={`/product/${product._id}`}>
                  <p className="card-text">{product.name}</p>
                  <p className="card-price">${product.price}</p>
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <footer className="py-5 mx-auto" id="footer1" align="center">
        All right reserved
      </footer>
    </fragment>
  );
}

export default App;

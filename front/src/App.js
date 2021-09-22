import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';
import Cart from './screens/Cart';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  return (
    <BrowserRouter>
      <body>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark flex-column align-items-stretch">
          <div className="d-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent1">
            <form className="d-flex align-self-baseline pt-4">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <Link to="/" className="navbar-brand pe-0"><img src={"/images/cat_logo_light.png"} alt="Logo" width="150" height="150"/>Shoppurr</Link>
            
            <ul className="nav-item navbar-nav py-3">
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/signup">Signup</Link>
              <Link className="nav-link" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart2" viewBox="0 2 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>  {cartItems.length > 0 && (
                <span className="cartBadge">{cartItems.length}</span>
              )}</Link>
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
                  <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
                  <Link className="nav-link" to="/#">About</Link>
                  <Link className="nav-link" to="/#">Shop</Link>
                  <Link className="nav-link" to="/#">Contact</Link>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" component={Home} exact></Route>
        <Route path="/product/:id" component={Products}></Route>
        <Route path="/cart/:id?" component={Cart}></Route>
      </body>

      <footer id="footer1" align="center">
        <div className="container" id="footer_container">
          All right reserved
        </div>
      </footer>
    </BrowserRouter>    
  );
}

export default App;

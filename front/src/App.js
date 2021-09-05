import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark flex-column align-items-stretch">
        <div className="d-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent1">
          <form className="d-flex align-self-baseline pt-4">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <a href="/" className="navbar-brand pe-0"><img src={"/images/cat_logo_light.png"} alt="Logo" width="150" height="150"/>Shoppurr</a>
          
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

      <Route path="/product/:id" component={Products}></Route>
      <Route path="/" component={Home} exact></Route>

      <footer className="py-5 mx-auto" id="footer1" align="center">
        All right reserved
      </footer>
    </BrowserRouter>    
  );
}

export default App;

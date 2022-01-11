import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';
import Cart from './screens/Cart';
import Signin from './screens/Signin'
import Signup from './screens/Signup';
import { signout } from './actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  
  return (
    <BrowserRouter>
      <body>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/" className="navbar-brand"><img src={"/images/cat_logo_light.png"} alt="Logo" width="100" height="100"/>Shoppurr</Navbar.Brand>
          <Navbar.Toggle aria-controls="upper-navbar"/>
          <Navbar.Collapse id='upper-navbar'>
            <div className="justify-content-around navbar-collapse">
              <form className="d-flex nav-search">
                <FormControl className="me-2" type="search" placeholder="Search" aria-label="Search"/>
                <Button variant="secondary">Search</Button>
              </form>
              
              <div className='navbar-color'>
                <Link>
                  {userInfo ? 
                    (<NavDropdown title={userInfo.name} menuVariant="dark">
                      <Dropdown.Item to="#">profile</Dropdown.Item>
                      <NavDropdown.Divider/>
                      <Dropdown.Item to="#signout" onClick={signoutHandler}>sign out</Dropdown.Item>
                    </NavDropdown>)
                    : <NavLink className="" to="/signin">Sign in</NavLink>}
                </Link>
                <NavLink to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart2" viewBox="0 2 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg> Cart: {cartItems.length > 0 && (
                    <span className="cartBadge">{cartItems.length}</span>
                  )}
                </NavLink> 
                
                <NavDropdown title="$ CAD" menuVariant="dark">
                  <Dropdown.Item href="/">$ CAD</Dropdown.Item>
                  <Dropdown.Item href="/USD">$ USD</Dropdown.Item>
                  <Dropdown.Item href="/AUD">$ AUD</Dropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Nav className="justify-content-center sticky-top bg-dark" id="nav-links">
          <Nav.Item className="bg-dark"><Nav.Link aria-current="page" href="/#">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#">Shop</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#">Contact</Nav.Link></Nav.Item>
        </Nav>

        <Route path="/" component={Home} exact></Route>
        <Route path="/product/:id" component={Products}></Route>
        <Route path="/cart/:id?" component={Cart}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
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

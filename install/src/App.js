import React from 'react';

function App() {
  return (
    <fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark flex-column align-items-stretch">
        <div className="d-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent1">
          <form className="d-flex align-self-baseline pt-4">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <a href="/#" className="navbar-brand pe-0"><img src={"./images/cat_logo_light.png"} alt="Logo" width="150" height="150"/>Shoppurr</a>
          
          <ul className="nav-item navbar-nav py-3">
            <a className="nav-link" href="/#">Login</a>
            <a className="nav-link" href="/#">Signup</a>
          </ul>

          <div className="nav-item dropdown pt-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              $ CAD
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item active" href="/#">$ CAD</a></li>
              <li><a className="dropdown-item" href="/#">$ USD</a></li>
              <li><a className="dropdown-item" href="/#">$ AUD</a></li>
            </ul>
          </div>
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

      <div id="main-carousel-1" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#main-carousel-1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#main-carousel-1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#main-carousel-1" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" align="center">
            <img src={"./images/main-cat-toys-1.jpg"} className="d-block" alt="..."/>
          </div>
          <div className="carousel-item" align="center">
            <img src={"./images/main-cat-toys-2.jpg"} className="d-block" alt="..."/>
          </div>
          <div className="carousel-item" align="center">
            <img src={"./images/main-cat-toys-3.jpg"} className="d-block" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#main-carousel-1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#main-carousel-1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="small-container" id="featured-products-1">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <div className="card" style={{width: '18rem'}}>
              <img src={"./images/cat_logo_dark.png"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="card-text">Cat Toy</p>
                <p className="card-text">$50.00</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width: '18rem'}}>
              <img src={"./images/cat_logo_dark.png"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="card-text">Cat Toy</p>
                <p className="card-text">$50.00</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width: '18rem'}}>
              <img src={"./images/cat_logo_dark.png"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="card-text">Cat Toy</p>
                <p className="card-text">$50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}

export default App;

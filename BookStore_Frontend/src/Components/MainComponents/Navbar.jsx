import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  const cartCount = useSelector((state) => state.storeSlice.addToCart.length)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5" id='navBar'>
      <Link to="/" className="navbar-brand h1 mx-2 mx-lg-5">E-Book Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto mx-2 mx-lg-5 h5 align-content-center">
          <Link to="/home" className="nav-item nav-link active h2 mx-5 mx-lg-5">Home</Link>
        </div>
        <div className='ms-auto  h5'>
          <Link to="/cart" className="nav-item nav-link active ms-auto mx-5 mx-sm-5 text-white align-content-center">Cart {cartCount}</Link>
          </div>
          <div className=" btn  btn-outline-primary mx-3">
          <Link to="/add-book" className="nav-item nav-link active ms-auto mx-5 mx-sm-5">Add Book</Link>
          </div>
      </div> 
    </nav>
  );
}
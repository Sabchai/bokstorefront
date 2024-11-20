import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the styles for the Navbar

const Navbar = () => {
  const isAuthenticated = false; // This should be dynamic based on authentication state

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span>Bookstore</span>
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/books" className="navbar-link">Books</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="navbar-link">My Account</Link>
              <Link to="/history" className="navbar-link">Purchase History</Link>
              <Link to="/wishlist" className="navbar-link">Wishlist</Link>
              <button className="navbar-button">Log Out</button>
            </>
          ) : (
            <></>  
          )}

          <Link to="/cart" className="navbar-link cart">
            <span>🛒</span>
            <span>Cart</span>
          </Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search books..." className="search-input" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

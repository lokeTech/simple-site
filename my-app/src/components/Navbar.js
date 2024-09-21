// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Simple Site</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import './Menu.css'; // Ensure this file exists

const Menu = () => {
  return (
    <section className="menu-container">
      <h1>Menu</h1>
      <div className="menu-items">
        <div className="menu-item">
          <a href="/">Home</a>
        </div>
        <div className="menu-item">
          <a href="/blog">Blog</a>
        </div>
        <div className="menu-item">
          <a href="/about">About</a>
        </div>
        
      </div>
    </section>
  );
};

export default Menu;


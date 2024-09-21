// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.facebook.com/lokesh.rangari.547" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        <a href="https://www.instagram.com/am_lokesh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/mwlite/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-details">
          <p>Contact us:lokeshanilrangari@gmail.com</p>
          <p>Address: 1234 Street Name ,Ajni ,Nagpur,Maharashtr,india</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

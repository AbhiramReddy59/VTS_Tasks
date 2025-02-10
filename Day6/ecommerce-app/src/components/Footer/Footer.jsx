import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>AB. We provide the best products with excellent customer service.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>Email: abhiramreddye@outlook.com</p>
          <p>Phone: +91 8074840426</p>
          <p>Hyderabad, India</p>
        </div>
      </div>
      

      <div className={styles.footerBottom}>
        <p>&copy; 2024 AB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
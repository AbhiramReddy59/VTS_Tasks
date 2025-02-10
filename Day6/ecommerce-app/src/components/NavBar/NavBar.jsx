import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.jpg';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/"> <img src={logo} alt="AB Logo" /></Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">Cart (0)</Link>
      </div>
    </nav>
  );
};

export default NavBar; 
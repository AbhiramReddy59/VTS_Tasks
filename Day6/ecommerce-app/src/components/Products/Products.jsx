import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
const Products = () => {
  
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: product1
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 149.99,
      image: product2
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: product3
    },
    {
      id: 4,
      name: 'Laptop Bag',
      price: 199.99,
      image: product4
    }
  ];

  return (
    <section className={styles.productsSection}>
      <h2>Our Products</h2>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products; 
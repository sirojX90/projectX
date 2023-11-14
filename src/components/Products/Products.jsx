import React from 'react';
import styles from './Products.module.css';
import Product from '../Product/Product';
// data products
import products from '../../data/data';

const Products = () => {
  return (
    <div className={styles.products}>
        <h1>PRODUCTS</h1>
        <div className={styles['products-item']}>
            {products.map((produc) => (
                <Product key={produc.id} produc={produc}/>
            ))}
        </div>
    </div>
  );
};

export default Products;
import React from 'react';
import styles from './Likes.module.css';

const Likes = () => {
  return (
    <div className={styles.likes}>
      <h2>FAVORITE CART</h2>
      <p>There are no products you like in your cart!</p>
      <span>&#128542;</span>
    </div>
  );
};

export default Likes;
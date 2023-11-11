import React from 'react';
import BagBtn from './BagBtn/BagBtn';
import styles from './Cart.module.css';
import LikeBtn from './LikeBtn/LikeBtn';

const Cart = () => {
  return (
    <div className={styles.cart}>
        <LikeBtn/>
        <BagBtn/>
        <span className={styles["count-number"]}>0</span>
    </div>
  )
}

export default Cart;
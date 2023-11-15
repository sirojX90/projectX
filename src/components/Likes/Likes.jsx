import React, { useContext } from 'react';
import ProducContext from '../../context/produc-context';
import LikeProducts from './LikeProducts/LikeProducts';
import styles from './Likes.module.css';

const Likes = () => {
  const ctx = useContext(ProducContext);
  return (
    <div className={styles.likes}>
      <h2>FAVORITE CART</h2>
      {ctx.likes.length === 0 ? (
        <div className={styles['likes-title']}>
          <p>There are no products you like in your cart!</p>
          <span>&#128542;</span>
        </div>
      ) : (ctx.likes.map((produc) => <LikeProducts key={produc.id} produc={produc}/>))}
    </div>
  );
};

export default Likes;
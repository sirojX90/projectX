import React, { useContext } from 'react';
import styles from './Product.module.css';
import likeBlack from '../../assets/icon/likeBlack.png';
import BasketIcon from '../../assets/icon/components/BasketIcon/BasketIcon';
import ProducContext from '../../context/produc-context';

const Product = ({produc}) => {
  const ctx = useContext(ProducContext);
  return (
    <div className={styles.item}>
      <img className={styles['product-img']} src={produc.thumbnail} alt={produc.brand}/>
      <h2 className={styles['product-name']}>{produc.title}</h2>
      <dir className={styles['produc-info']}>
        <h2><span>$ </span>{produc.price}</h2>
        <div className={styles['like-basket']}>
          <img src={likeBlack} alt="img"/>
          <BasketIcon produc={produc}/>
        </div>
      </dir>
    </div>
  );
};

export default Product;
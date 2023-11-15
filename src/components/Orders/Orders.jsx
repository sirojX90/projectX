import React from 'react';
import { useContext } from 'react';
import ProducContext from '../../context/produc-context';
import OrderProducts from './OrderProducts/OrderProducts';
import styles from './Orders.module.css';

const Orders = () => {
  const ctx = useContext(ProducContext);
  return (
    <div className={styles.orders} >
      <h2>SHOPPING CART</h2>
      {ctx.items.length === 0 ? (
        <div className={styles['orders-title']}>
          <p>There is no product in your cart!</p>
          <span>&#128542;</span>
        </div>
      ) : (
        <>
          {ctx.items.map((produc) => <OrderProducts key={produc.id} produc={produc}/>)}
          <h2 className={styles['total-price']}>Total Price: $ {ctx.totalPrice}</h2>
        </>
      )}
    </div>
  );
};

export default Orders;            
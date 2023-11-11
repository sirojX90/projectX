import React from 'react'
import ProductBasket from '../ProductBasket/ProductBasket'
import styles from './ProductsItem.module.css'

const ProductsItem = ({produc}) => {
  return (
    <div className={styles.item}>
      <dir className={styles['produc-head']}>
        <img src={produc.thumbnail} alt={produc.brand}/>
        <h2>{produc.title}</h2>
      </dir>
      <dir className={styles['produc-info']}>
        <h2><span>$ </span>{produc.price}</h2>
        <ProductBasket/>
      </dir>
    </div>
  )
}

export default ProductsItem
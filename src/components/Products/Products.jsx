import React from 'react'
import styles from './Products.module.css'
import ProductsItem from './ProductsItem'
// data products
import products from '../../data/data'

const Products = () => {
  return (
    <div className={styles.box}>
        <h1>PRODUCTS</h1>
        <div className={styles['box-item']}>
            {products.map((produc) => (
                <ProductsItem key={produc.id} produc={produc}/>
            ))}
        </div>
    </div>
  )
}

export default Products
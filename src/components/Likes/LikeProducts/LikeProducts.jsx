import React, { useContext } from 'react';
import ProducContext from '../../../context/produc-context';
import styles from './LikeProducts.module.css';

const LikeProducts = ({ produc }) => {
    const ctx = useContext(ProducContext);
    return (
        <div className={styles.like}>
            <img className={styles['like-img']} src={produc.thumbnail} alt={produc.brand} />
            <div className={styles['like-details']}>
                <span>{produc.brand}</span>
                <span>{produc.title}</span>
                <span>{produc.description}</span>
            </div>
            <dir className={styles['like-price']}>
                <p><span>$ </span>{produc.price}</p>
                <span className={styles.delete} onClick={() => ctx.deleteLike(produc)}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 -20 448 512" height=".9em" width=".9em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                        </path>
                    </svg>
                </span>
            </dir>
        </div>
    )
}

export default LikeProducts
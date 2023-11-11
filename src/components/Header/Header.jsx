import React from 'react';
import styles from './Header.module.css';
import HeaderImg from '../../assets/hero.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={HeaderImg} alt="Img" />
    </div>
  )
}

export default Header
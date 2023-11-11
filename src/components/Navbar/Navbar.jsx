import React from 'react';
import Cart from '../Cart/Cart';
import Logo from '../NavbarIcon/Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <div className={styles.likeBag}>
            <Cart/>
        </div>
    </div>
  )
};

export default Navbar;
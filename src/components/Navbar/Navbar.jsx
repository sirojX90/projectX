import React from 'react';
import HandBag from '../NavbarIcon/HandBag';
import Like from '../NavbarIcon/Like';
import Logo from '../NavbarIcon/Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <div className={styles.likeBag}>
            <Like/>
            <HandBag />
            <span className={styles["count-number"]}>0</span>
        </div>
    </div>
  )
};

export default Navbar;
import React, { useContext } from 'react';
import BagIcon from '../../assets/icon/components/BagIcon/BagIcon';
import LikeIcon from '../../assets/icon/components/LikeIcon/LikeIcon';
import LogoIcon from '../../assets/icon/components/LogoIcon/LogoIcon';
import ProducContext from '../../context/produc-context';
import styles from './Navbar.module.css';

const Navbar = () => {
  const ctx = useContext(ProducContext);
  return (
    <div className={styles.navbar}>
        <LogoIcon/>
        <div className={styles['like-bag']}>
            <LikeIcon/>
            <BagIcon/>
            <span className={styles['count-number']}>{ctx.items.length}</span>
        </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Header/>
      <Products/>
    </div>
  );
};

export default Home;
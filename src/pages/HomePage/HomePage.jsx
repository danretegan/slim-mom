import React from 'react';
import Header from '../../components/Header/Header';
import CalorieForm from '../../components/CalorieForm/CalorieForm';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={`${styles.container} ${styles.background}`}>
      <Header />
      <CalorieForm />
    </div>
  );
};

export default HomePage;

import React from 'react';
import CalorieForm from '../../components/CalorieForm/CalorieForm';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CalorieForm />
    </div>
  );
};

export default HomePage;

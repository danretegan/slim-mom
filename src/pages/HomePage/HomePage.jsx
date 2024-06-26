import React from 'react';
import CalorieForm from '../../components/CalorieForm/CalorieForm';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Calculate your daily calorie intake right now</h1>
      <CalorieForm />
    </div>
  );
};

export default HomePage;

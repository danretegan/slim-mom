// src/components/Summary/Summary.jsx
import React, { useContext } from 'react';
import styles from './Summary.module.css';
import { CalorieInfoContext } from '../../context/CalorieInfoContext';
import { ConsumedProductsContext } from '../../context/ConsumedProductsContext';
import { format } from 'date-fns';

const Summary = ({ selectedDate }) => {
  const { calorieInfo } = useContext(CalorieInfoContext);
  const { consumedProducts } = useContext(ConsumedProductsContext);

  const totalConsumedCalories = consumedProducts.reduce((total, product) => {
    return total + (product.calories * product.grams) / product.weight;
  }, 0);

  // Verificăm dacă selectedDate este valid
  const formattedDate = selectedDate
    ? format(selectedDate, 'EEEE dd MMM yyyy')
    : '';

  // Calculăm procentul de calorii consumate
  const consumedPercentage = calorieInfo
    ? (totalConsumedCalories / calorieInfo.dailyRate) * 100
    : 0;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        {calorieInfo ? (
          <>
            <p className={styles.title}>Summary for {formattedDate}</p>
            <p className={styles.summary}>
              Left {Math.round(calorieInfo.dailyRate - totalConsumedCalories)}{' '}
              kcal
            </p>
            <p className={styles.summary}>
              Consumed {Math.round(totalConsumedCalories)} kcal
            </p>
            <p className={styles.summary}>
              Daily rate {calorieInfo.dailyRate} kcal
            </p>
            <p className={styles.summary}>
              {Math.round(consumedPercentage)}% of normal
            </p>
            <section className={styles.x}>
              <p className={styles.title}>Food not recommended</p>
              {calorieInfo.notRecommendedFoods &&
              calorieInfo.notRecommendedFoods.length > 0 ? (
                <ul className={styles.list}>
                  {calorieInfo.notRecommendedFoods.map((food, index) => (
                    <li key={index}>{food}</li>
                  ))}
                </ul>
              ) : (
                <p>No foods are not recommended</p>
              )}
            </section>
          </>
        ) : (
          <p>No data available. Please calculate your intake first.</p>
        )}
      </section>
    </div>
  );
};

export default Summary;

import React, { useContext } from 'react';
import styles from './Summary.module.css';
import { CalorieInfoContext } from '../../context/CalorieInfoContext';

const Summary = () => {
  const { calorieInfo } = useContext(CalorieInfoContext);

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <h4>Summary Page:</h4>
        {calorieInfo ? (
          <>
            <p className={styles.title}>Summary for today data</p>
            <p className={styles.summary}>Left 000 kcal</p>
            <p className={styles.summary}>Consumed 000 kcal</p>
            <p className={styles.summary}>
              Daily rate {calorieInfo.dailyRate} kcal
            </p>
            <p className={styles.summary}>n% of normal 0% </p>
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

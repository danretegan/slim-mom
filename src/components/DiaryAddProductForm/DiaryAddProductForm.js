import React, { useState } from 'react';
import styles from './DiaryAddProductForm.module.css';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

const DiaryAddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Logica pentru a adăuga produsul
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Enter product name*
              <input
                type="text"
                value={productName}
                onChange={e => setProductName(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Grams*
              <input
                type="number"
                value={grams}
                onChange={e => setGrams(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
        </form>
        <Button type="submit" text="Add" variant="colorButton" size="size180" />
      </div>
    </>
  );
};

export default DiaryAddProductForm;

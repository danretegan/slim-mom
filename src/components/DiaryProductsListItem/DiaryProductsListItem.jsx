import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import Button from 'components/Button/Button';

const DiaryProductsListItem = ({ product, onDelete }) => {
  const calories = (product.grams * product.calories) / 100;

  return (
    <li className={styles.item}>
      <span>{product.title}</span>
      <span>{product.grams} g</span>
      <span>{Math.round(calories)} kcal</span>{' '}
      {/* Afișăm caloriile calculate */}
      <Button
        type="button"
        text="-"
        variant="whiteButton"
        size="round48"
        handlerFunction={onDelete}
      />
    </li>
  );
};

export default DiaryProductsListItem;

import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import Button from 'components/Button/Button';

const DiaryProductsListItem = ({ product, onDelete }) => {
  return (
    <li className={styles.item}>
      <span>{product.title}</span>
      <span>{product.grams} grams</span>
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

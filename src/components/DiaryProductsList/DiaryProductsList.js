import React from 'react';
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products, onDelete }) => {
  return (
    <ul className={styles.list}>
      {products.map(product => (
        <DiaryProductsListItem
          key={product._id}
          product={product}
          onDelete={() => onDelete(product._id)}
        />
      ))}
    </ul>
  );
};

export default DiaryProductsList;

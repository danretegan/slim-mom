import React from 'react';
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products, onDelete }) => {
  return (
    <ul className={styles.list}>
      {products.map(product => (
        <DiaryProductsListItem
          key={product.consumedProductId} // Folosim ID-ul unic
          product={product}
          onDelete={() => onDelete(product.consumedProductId)} // Folosim ID-ul unic
        />
      ))}
    </ul>
  );
};

export default DiaryProductsList;

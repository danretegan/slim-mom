// src/components/DiaryPage/DiaryPage.jsx
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import Summary from 'components/Summary/Summary';
import { AuthContext } from '../../context/AuthContext';
import { ConsumedProductsContext } from '../../context/ConsumedProductsContext';
import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const { auth } = useContext(AuthContext);
  const { consumedProducts, setConsumedProducts } = useContext(
    ConsumedProductsContext
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      const fetchConsumedProducts = async () => {
        try {
          const response = await axios.get(
            'http://localhost:3000/api/products/day-info',
            {
              params: { date: selectedDate.toISOString() },
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          const consumedProducts = response.data.consumedProducts.map(cp => ({
            ...cp.productId,
            grams: cp.quantity,
            consumedProductId: cp._id,
          }));
          setConsumedProducts(consumedProducts);
        } catch (error) {
          console.error('Error fetching consumed products:', error);
        }
      };

      fetchConsumedProducts();
    }
  }, [selectedDate, auth.isAuthenticated, auth.token, setConsumedProducts]);

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleDeleteProduct = async productId => {
    try {
      await axios.delete(
        `http://localhost:3000/api/products/consumed/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setConsumedProducts(prevProducts =>
        prevProducts.filter(product => product.consumedProductId !== productId)
      );
    } catch (error) {
      console.error('Error deleting consumed product:', error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <DiaryDateCalendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <DiaryProductsList
          products={consumedProducts}
          onDelete={handleDeleteProduct}
        />
        <Button
          type="button"
          text="+"
          handlerFunction={handleAddProduct}
          variant="colorButton"
          size="round48"
        />
        <Summary selectedDate={selectedDate} />
      </div>
    </>
  );
};

export default DiaryPage;

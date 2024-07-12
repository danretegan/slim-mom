import React, { useState, useContext } from 'react';
import axios from 'axios';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { AuthContext } from '../../context/AuthContext';
import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const { auth } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);

  const handleAddProduct = () => {
    setIsAddProductFormOpen(true);
  };

  const handleSaveProduct = async product => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/products/consumed',
        {
          productId: product._id,
          date: selectedDate,
          quantity: product.grams,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setProducts(prevProducts => [
        ...prevProducts,
        { ...product, _id: response.data._id },
      ]);
      setIsAddProductFormOpen(false);
    } catch (error) {
      console.error('Error saving consumed product:', error);
    }
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
      setProducts(prevProducts =>
        prevProducts.filter(product => product._id !== productId)
      );
    } catch (error) {
      console.error('Error deleting consumed product:', error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h4>Diary Page:</h4>
        <DiaryDateCalendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <DiaryProductsList products={products} onDelete={handleDeleteProduct} />
        <Button
          type="button"
          text="+"
          handlerFunction={handleAddProduct}
          variant="colorButton"
          size="round48"
        />
        {isAddProductFormOpen && (
          <DiaryAddProductForm
            selectedDate={selectedDate}
            onSave={handleSaveProduct}
            onClose={() => setIsAddProductFormOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default DiaryPage;

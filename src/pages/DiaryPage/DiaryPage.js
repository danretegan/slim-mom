import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);
  // const navigate = useNavigate();

  const handleAddProduct = () => {
    setIsAddProductFormOpen(true);
  };

  const handleSaveProduct = product => {
    setProducts(prevProducts => [...prevProducts, product]);
    setIsAddProductFormOpen(false);
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
        <DiaryProductsList products={products} />
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

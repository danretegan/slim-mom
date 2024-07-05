import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/add-product');
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
        <DiaryProductsList />
        <Button
          type="button"
          text="+"
          handlerFunction={handleAddProduct}
          variant="colorButton"
          size="round48"
        />
      </div>
    </>
  );
};

export default DiaryPage;

import React, { useState } from 'react';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import styles from './DiaryPage.module.css';
import Button from 'components/Button/Button';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
          // handlerFunction={handleAdd}
          variant="colorButton"
          size="round48"
        />
      </div>
    </>
  );
};

export default DiaryPage;

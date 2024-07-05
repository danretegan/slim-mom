import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Header from 'components/Header/Header';
import styles from './DiaryPage.module.css';
import Button from 'components/Button/Button';

const DiaryPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h3>Diary Page:</h3>
      <DiaryDateCalendar />
      <DiaryProductsList />
      <Button
        type="button"
        text="+"
        // handlerFunction={handleAdd}
        variant="colorButton"
        size="round48"
      />
    </div>
  );
};

export default DiaryPage;

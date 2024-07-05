import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import Header from 'components/Header/Header';

const DiaryPage = () => {
  return (
    <div>
      <Header />
      <DiaryDateCalendar />
      <DiaryAddProductForm />
    </div>
  );
};

export default DiaryPage;

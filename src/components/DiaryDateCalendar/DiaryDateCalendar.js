import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DiaryDateCalendar.module.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { DateContext } from '../../context/DateContext'; // Importă contextul

const DiaryDateCalendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext);
  const formattedDate = format(selectedDate, 'EEEE dd MMM yyyy');

  return (
    <div className={styles.datePickerContainer}>
      <span className={styles.dateLabel}>{formattedDate}</span>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        customInput={<CustomInput />}
        popperContainer={({ children }) => (
          <div className={styles.fixedPopper}>{children}</div>
        )}
        className={styles.datePickerInput}
      />
    </div>
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <button className={styles.iconButton} onClick={onClick} ref={ref}>
    <FaCalendarAlt />
  </button>
));

export default DiaryDateCalendar;

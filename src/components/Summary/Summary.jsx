import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <h4>Summary Page:</h4>
        <p className={styles.title}>Summary for today data</p>
        <p className={styles.list}>Left 000 kcal</p>
        <p className={styles.list}>Summary for</p>
        <p className={styles.list}>Consumed 000 kcal</p>
        <p className={styles.list}>Daily rate 000 kcal</p>
        <p className={styles.list}>n% of normal 0% </p>
      </section>
      <section className={styles.form}>
        <p className={styles.title}>Food not recommended</p>
      </section>
    </div>
  );
};

export default Summary;

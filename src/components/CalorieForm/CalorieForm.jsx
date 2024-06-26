import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './CalorieForm.module.css';

const CalorieForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Form data submitted:', data);
    // logica de trimitere a datelor la un server sau de calculare a caloriilor.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.title}>
        Calculate your daily calorie intake right now
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Height *
          <input
            type="number"
            {...register('height', { required: true })}
            className={styles.input}
          />
        </label>
        {errors.height && (
          <span className={styles.error}>Height is required</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Age *
          <input
            type="number"
            {...register('age', { required: true })}
            className={styles.input}
          />
        </label>
        {errors.age && <span className={styles.error}>Age is required</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Current weight *
          <input
            type="number"
            {...register('currentWeight', { required: true })}
            className={styles.input}
          />
        </label>
        {errors.currentWeight && (
          <span className={styles.error}>Current weight is required</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Desired weight *
          <input
            type="number"
            {...register('desireWeight', { required: true })}
            className={styles.input}
          />
        </label>
        {errors.desireWeight && (
          <span className={styles.error}>Desired weight is required</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <span className={styles.label}>Blood type *</span>
        <div className={styles.radioGroup}>
          <label className={styles.label}>
            <input
              type="radio"
              value="1"
              {...register('bloodType', { required: true })}
              className={styles.input}
            />
            <span>0</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              value="2"
              {...register('bloodType', { required: true })}
              className={styles.input}
            />
            <span>A</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              value="3"
              {...register('bloodType', { required: true })}
              className={styles.input}
            />
            <span>B</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              value="4"
              {...register('bloodType', { required: true })}
              className={styles.input}
            />
            <span>AB</span>
          </label>
        </div>
        {errors.bloodType && (
          <span className={styles.error}>Blood type is required</span>
        )}
      </div>
      <button type="submit">Start losing weight</button>
    </form>
  );
};

export default CalorieForm;

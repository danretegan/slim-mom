import React, { useState } from 'react';
import styles from './CalorieForm.module.css';
import { calculateCalories } from '../../utils/calorieCalculator';
import { filterFoodByBloodType } from '../../utils/filterFoodByBloodType';
import Modal from '../Modal/Modal';
import products from '../../constants/products.json'; // Importăm datele despre produse

const CalorieForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    bloodType: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recCalories, setRecCalories] = useState(null);
  const [forbiddenFoods, setForbiddenFoods] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const recCalories = calculateCalories(
      formData.currentWeight,
      formData.height,
      formData.age
    );
    if (recCalories) {
      setRecCalories(recCalories);
    }

    const bloodTypeIndex = parseInt(formData.bloodType);
    const forbiddenFoods = filterFoodByBloodType(bloodTypeIndex);
    setForbiddenFoods(forbiddenFoods);

    setIsModalOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.title}>
          Calculate your daily calorie intake right now
        </div>

        <div className={styles.twoColumns}>
          <section>
            {/* Height */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Height *
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>
            </div>

            {/* Age */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Age *
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>
            </div>

            {/* Current weight */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Current weight *
                <input
                  type="number"
                  name="currentWeight"
                  value={formData.currentWeight}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>
            </div>
          </section>

          <section>
            {/* Desired weight */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Desired weight *
                <input
                  type="number"
                  name="desireWeight"
                  value={formData.desireWeight}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </label>
            </div>

            {/* Blood type */}
            <div className={styles.formGroup}>
              <span className={styles.label}>Blood type *</span>
              <div className={styles.divider}></div> {/* Linie gri */}
              <div className={styles.radioGroup}>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="1"
                    checked={formData.bloodType === '1'}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <span>0</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="2"
                    checked={formData.bloodType === '2'}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <span>A</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="3"
                    checked={formData.bloodType === '3'}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <span>B</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="4"
                    checked={formData.bloodType === '4'}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <span>AB</span>
                </label>
              </div>
            </div>
          </section>
        </div>

        <button type="submit" className={styles.button}>
          Start losing weight
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className={styles.modalTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={styles.calorieValue}>{recCalories} kcal</p>
        <h3 className={styles.modalSubtitle}>Foods you should not eat:</h3>
      </Modal>
    </>
  );
};

export default CalorieForm;

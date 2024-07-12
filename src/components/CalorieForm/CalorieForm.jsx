import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './CalorieForm.module.css';
import { BloodTypeContext } from '../../context/BloodTypeContext';
import { getDailyIntake } from '../../api/products';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { Loader } from '../loader';
import { startLoading, stopLoading } from '../../redux/actions';
import { AuthContext } from '../../context/AuthContext';
import { CalorieInfoContext } from '../../context/CalorieInfoContext';
import { saveCalorieInfo } from 'api/calorieInfo';

const CalorieForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recCalories, setRecCalories] = useState(null);
  const [forbiddenFoods, setForbiddenFoods] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loader.loading);
  const navigate = useNavigate();
  const { bloodType, setBloodType } = useContext(BloodTypeContext);
  const { auth } = useContext(AuthContext);
  const { setCalorieInfo } = useContext(CalorieInfoContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(startLoading());
    try {
      const params = {
        weight: formData.currentWeight,
        height: formData.height,
        age: formData.age,
        bloodType: bloodType,
      };

      const data = await getDailyIntake(params);
      setRecCalories(data.dailyKcal);
      setForbiddenFoods(data.notRecommendedProducts);

      if (auth.isAuthenticated) {
        await saveCalorieData(data.dailyKcal, data.notRecommendedProducts);
        setIsModalOpen(false);
        navigate('/calculator');
      } else {
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      dispatch(stopLoading());
    }
  };

  const handleStartLosingWeight = () => {
    setIsModalOpen(false);
    navigate('/registration');
  };

  const saveCalorieData = async (dailyKcal, notRecommendedProducts) => {
    const calorieInfo = {
      height: formData.height,
      age: formData.age,
      currentWeight: formData.currentWeight,
      desireWeight: formData.desireWeight,
      bloodType: bloodType,
      dailyRate: dailyKcal,
      notRecommendedFoods: notRecommendedProducts.map(food => food.title) || [],
    };

    await saveCalorieInfo(calorieInfo);
    setCalorieInfo(calorieInfo);
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.title}>
          Calculate your daily calorie intake right now
        </div>

        <div className={styles.twoColumns}>
          <section>
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

            <div className={styles.formGroup}>
              <span className={styles.label}>Blood type *</span>
              <div className={styles.divider}></div>
              <div className={styles.radioGroup}>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="1"
                    checked={bloodType === '1'}
                    onChange={e => setBloodType(e.target.value)}
                    required
                  />
                  <span>0</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="2"
                    checked={bloodType === '2'}
                    onChange={e => setBloodType(e.target.value)}
                    required
                  />
                  <span>A</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="3"
                    checked={bloodType === '3'}
                    onChange={e => setBloodType(e.target.value)}
                    required
                  />
                  <span>B</span>
                </label>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="bloodType"
                    value="4"
                    checked={bloodType === '4'}
                    onChange={e => setBloodType(e.target.value)}
                    required
                  />
                  <span>AB</span>
                </label>
              </div>
            </div>
          </section>
        </div>

        <Button
          type="submit"
          text="Start losing weight"
          variant="colorButton"
        />
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className={styles.modalTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={styles.calorieContainer}>
          <span className={styles.calorieNumber}>{recCalories}</span>
          <span className={styles.calorieUnit}> kcal</span>
        </p>
        <div className={styles.dividerLine}></div>
        <h3 className={styles.modalSubtitle}>Foods you should not eat:</h3>
        <ol className={styles.forbiddenFoodsList}>
          {forbiddenFoods.map(food => (
            <li key={food._id}>{food.title}</li>
          ))}
        </ol>
        <div className={styles.modalButtonContainer}>
          <Button
            type="button"
            text="Start losing weight"
            variant="colorButton"
            handlerFunction={handleStartLosingWeight}
          />
        </div>
      </Modal>
    </>
  );
};

export default CalorieForm;
